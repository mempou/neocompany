<?php
/**
 * Plugin Name: Send file REST API
 * Description: A plugin to handle custom contact form submissions via REST API.
 * Version: 1.0
 * Author: glish01
 */

// Register the REST API endpoint on rest_api_init hook
add_action('rest_api_init', function () {
    register_rest_route('custom/v1', '/submit-form', array(
        'methods' => 'POST',
        'callback' => 'handle_form_submission',
        'permission_callback' => '__return_true',
    ));
});

// Register a custom post type to store form submissions
function register_form_submissions_post_type() {
    $args = array(
        'public' => true,
        'label'  => 'Dossier Recus',
        'supports' => array('title', 'editor', 'custom-fields', 'thumbnail'),
        'show_in_menu' => true,
        'show_in_rest' => true,
    );
    register_post_type('form_submission', $args);
}
add_action('init', 'register_form_submissions_post_type');

// Handle the form submission
function handle_form_submission(WP_REST_Request $request) {
    // Sanitize input fields
    $name = sanitize_text_field($request->get_param('name'));
    $email = sanitize_email($request->get_param('email'));
    $subject = sanitize_text_field($request->get_param('subject'));
    $message = sanitize_textarea_field($request->get_param('message'));

    // Validate email
    if (!is_email($email)) {
        return new WP_REST_Response('Invalid email address', 400);
    }

    // Save the data as a custom post type
    $post_id = wp_insert_post([
        'post_title' => $subject,
        'post_content' => $message,
        'post_status' => 'publish',
        'post_type' => 'form_submission',
        'meta_input' => [
            'name' => $name,
            'email' => $email,
           
        ],
    ]);

    if (is_wp_error($post_id)) {
        return new WP_REST_Response('Failed to submit form', 500);
    }

    // Handle file upload
    if (!empty($_FILES['file'])) {
        $file = $_FILES['file'];
        $upload = wp_handle_upload($file, array('test_form' => false));

        if (isset($upload['file'])) {
            $attachment_id = wp_insert_attachment(array(
                'post_mime_type' => $upload['type'],
                'post_title' => basename($upload['file']),
                'post_content' => '',
                'post_status' => 'inherit'
            ), $upload['file'], $post_id);

            if (!is_wp_error($attachment_id)) {
                require_once(ABSPATH . 'wp-admin/includes/image.php');
                wp_update_attachment_metadata($attachment_id, wp_generate_attachment_metadata($attachment_id, $upload['file']));
                update_post_meta($post_id, 'uploaded_file', $attachment_id);
            } else {
                return new WP_REST_Response('Failed to upload file', 500);
            }
        }
    }

    return new WP_REST_Response('Form and file submitted successfully!', 200);
}
