import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import GoogleMap from './GoogleMap';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/contact.js';
import axios from 'axios';

function Contact() {
    const [response, setResponse] = useState(null);
    const [ loading, setLoading ] = useState(false)
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const formSubmit = async (e) => {
        e.preventDefault();

        const nameValue = formData.name.trim();
        const emailValue = formData.email.trim();
        const subjectValue = formData.subject.trim();
        const messageValue = formData.message.trim();

        if (nameValue === "") {
            setFormError(document.getElementById("contact_name"), "Name can't be blank");
        } else {
            setFormSuccess(document.getElementById("contact_name"));
        }

        if (emailValue === "") {
            setFormError(document.getElementById("contact_email"), "Email can't be blank");
        } else if (!isEmail(emailValue)) {
            setFormError(document.getElementById("contact_email"), "Not a valid email");
        } else {
            setFormSuccess(document.getElementById("contact_email"));
        }

        if (subjectValue === "") {
            setFormError(document.getElementById("contact_subject"), "Subject can't be blank");
        } else {
            setFormSuccess(document.getElementById("contact_subject"));
        }

        if (messageValue === "") {
            setFormError(document.getElementById("contact_message"), "Message can't be blank");
        } else {
            setFormSuccess(document.getElementById("contact_message"));
        }

        if (nameValue && emailValue && isEmail(emailValue) && subjectValue && messageValue) {
            const userInfo = `\n\n\n\n<h3 class=\"wp-block-heading\"> Nom: ${formData.name}<\/h3>\n\n\n\n  \n\n\n\n<h3 class=\"wp-block-heading\">Email : ${formData.email}<\/h3>\n\n\n\n  \n\n\n\n  \n\n\n\n<h3 class=\"wp-block-heading\">Message : ${formData.message}<\/h3>\n\n\n\n`
            const data = {
                name: formData.name,
                email: formData.email,
                subject: formData.subject,
                message: userInfo,
            };

            try {
                console.log('form data', data)
                setLoading(true)
                const response = await axios.post('https://www.admin.neocompany.org/wp-json/custom/v1/submit-form', data);
                setLoading(false)
                console.log('form data response', response)
                setResponse(response.data);
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                })
                
                setError(null);
            } catch (error) {
                setLoading(false);
                setResponse(null);
                setError('Error submitting form');
            }
        }
    };

    const setFormError = (input, message) => {
        const formControl = input.parentElement;
        const errorMsg = formControl.querySelector(".contact_input-msg");
        formControl.className = "form-control text-left error";
        errorMsg.innerText = message;
    };

    const setFormSuccess = (input) => {
        const formControl = input.parentElement;
        formControl.className = "form-control success";
    };

    const isEmail = (email) => {
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id.replace("contact_", "")]: value
        }));
    };

    return (
        <Styles>
            <div className="main-wrapper contact-page">
                <BreadcrumbBox title="Contactez-nous" />
                <section className="contact-area">
                    <Container>
                        <Row>
                            <Col md="4">
                                <div className="contact-box-title">
                                    <h4>Coordonnées</h4>
                                </div>
                                <div className="contact-icon-box d-flex">
                                    <div className="icon">
                                        <i className="las la-map-marker"></i>
                                    </div>
                                    <div className="box-content">
                                        <h5>Notre localisation</h5>
                                        <p>Bonamoussadi-Douala, Cameroun</p>
                                        <p>tunis-Tunis, Tunisie</p>
                                    </div>
                                </div>
                                <div className="contact-icon-box d-flex">
                                    <div className="icon">
                                        <i className="las la-envelope-open"></i>
                                    </div>
                                    <div className="box-content">
                                        <h5> Address Email</h5>
                                        <p>contact@neocompany.org<br /></p>
                                    </div>
                                </div>
                                <div className="contact-icon-box d-flex">
                                    <div className="icon">
                                        <i className="las la-phone"></i>
                                    </div>
                                    <div className="box-content">
                                        <h5>Téléphone</h5>
                                        <p>+237  654 864 709<br /></p>
                                    </div>
                                </div>
                                <div className="contact-social">
                                    <ul className="social list-unstyled list-inline">
                                        <li className="list-inline-item"><a href="https://web.facebook.com/agenceneocompany"><i className="fab fa-facebook-f"></i></a></li>
                                        <li className="list-inline-item"><a href="https://www.linkedin.com/company/neocompany237/"><i className="fab fa-linkedin-in"></i></a></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md="8">
                                <div className="contact-form">
                                    <div className="form-title">
                                        <h4>Prendre contact</h4>
                                    </div>
                                    <div className="form-box">
                                        <form id="form_contact" className="form" onSubmit={formSubmit}>
                                            <Row>
                                                <Col md="6">
                                                    <p className="form-control">
                                                        <input type="text" placeholder="Full Name" id="contact_name" value={formData.name} onChange={handleChange} />
                                                        <span className="contact_input-msg"></span>
                                                    </p>
                                                </Col>
                                                <Col md="6">
                                                    <p className="form-control">
                                                        <input type="email" placeholder="Email Address" id="contact_email" value={formData.email} onChange={handleChange} />
                                                        <span className="contact_input-msg"></span>
                                                    </p>
                                                </Col>
                                                <Col md="12">
                                                    <p className="form-control">
                                                        <input type="text" placeholder="Subject" id="contact_subject" value={formData.subject} onChange={handleChange} />
                                                        <span className="contact_input-msg"></span>
                                                    </p>
                                                </Col>
                                                <Col md="12">
                                                    <p className="form-control">
                                                        <textarea name="message" id="contact_message" placeholder="Enter Message" value={formData.message} onChange={handleChange}></textarea>
                                                        <span className="contact_input-msg"></span>
                                                    </p>
                                                </Col>
                                                <Col md="12">
                                                    <button disabled={loading} >{loading ? 'En cours ...' :  'Envoyer'}</button>
                                                </Col>
                                            </Row>
                                        </form>
                                        {response && <p>Form submitted successfully!</p>}
                                        {error && <p>{error}</p>}
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <FooterTwo />
            </div>
        </Styles>
    );
}

export default Contact;
