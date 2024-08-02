<?php
/**
 * Plugin Name:  Contact Form and file for Rest API
 * Description: A plugin to handle custom contact form submissions via REST API.
 * Version: 1.0.1
 * Author: glish01
 */

// Register the REST API endpoint on rest_api_init hook
add_action('rest_api_init', function () {
    register_rest_route('custom/v1', '/submit-form', array(
        'methods' => 'POST',
        'callback' => 'handle_form_submission',
    ));
});

// Register a custom post type to store form submissions
function register_form_submissions_post_type() {
    $args = array(
        'public' => true,
        'label'  => 'Form Submissions',
        'supports' => array('title', 'editor', 'custom-fields'),
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
            'email' => $email, // Save email as post meta (also treated as author email)
        ],
    ]);

    if (is_wp_error($post_id)) {
        return new WP_REST_Response('Failed to submit form', 500);
    }

    return new WP_REST_Response('Form submitted successfully!', 200);
}
