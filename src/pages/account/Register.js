import React, { useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { Styles } from './styles/account.js';
import emailjs from 'emailjs-com';



function Register() {

    const form = useRef();

    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
    //    message: null
    });


  


    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            
            [name]:  value,
        });
    };
// name === 'message' ? files[0] :
    const formSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); 

        const { name, email, selection } = formData;

        let hasError = false;

        if (name.trim() === "") {
            setFieldError("name", "First name can't be blank");
            hasError = true;
        } else {
            setFieldSuccess("name");
        }

        if (email.trim() === "") {
            setFieldError("email", "Email can't be blank");
            hasError = true;
        } else if (!isEmail(email.trim())) {
            setFieldError("email", "Not a valid email");
            hasError = true;
        } else {
            setFieldSuccess("email");
        }

        if (selection === "" || selection === "Choisir un service") {
            setFieldError("selection", "Please select a service");
            hasError = true;
        } else {
            setFieldSuccess("selection");
        }

        if (!hasError) {
            const formDataToSend = new FormData();
            formDataToSend.append('name', name);
            formDataToSend.append('email', email);
            formDataToSend.append('subject', selection);
            // if (message) {
            //     formDataToSend.append('message', message );
            // }

            
            
            const datas = {
                name: formData.name,
                email: formData.email,
                subject: formData.selection,
               // message: formData.message.name, 
            }
            console.log('formDataToSendss datas', datas)
            
    //         emailjs.send('service_i7wckyn', 'template_xdbfryi', datas, '5N9sygYRRKrGGLWXf')
    //   .then((response) => {
    //     console.log('email sent succ')
    //     setIsLoading(false);
    //   })
    //   .catch((error) => {
    //     console.error('Error sending email:', error);
    //     alert('Failed to send email.');
    //   });


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
                setIsLoading(false);
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
                setIsLoading(false);
                setResponse(null);
                setError('Error submitting form');
            }

            // emailjs
            // .sendForm('service_g4h6eqn', 'template_zbp196y', data, {
            //   publicKey: 'gXPwbYb6JIGE1-8q7',
            // })
            // .then(
            //   () => {
            //     console.log('SUCCESS!');
            //   },
            //   (error) => {
            //     console.log('FAILED...', error.text);
            //   },
            // );
           
        

           
        }
    };

    const resetForm = () => {
        setFormData({
            name: '',
            email: '',
            selection: '',
            message: null
        });
    };

    const setFieldError = (name, message) => {
        const element = document.getElementById(`registration_${name}`);
        if (element) {
            const formControl = element.parentElement;
            if (formControl) {
                const errorMsg = formControl.querySelector(".registration_input-msg");
                if (errorMsg) {
                    formControl.className = "form-control text-left error";
                    errorMsg.innerText = message;
                }
            }
        }
    };

    const setFieldSuccess = (name) => {
        const element = document.getElementById(`registration_${name}`);
        if (element) {
            const formControl = element.parentElement;
            if (formControl) {
                formControl.className = "form-control success";
            }
        }
    };

    const isEmail = (email) => {
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    };

    return (
        <Styles>
            <div className="main-wrapper registration-page">
                <section className="registration-area">
                    <Container>
                        <Row>
                            <Col md="12">
                                <div className="registration-box">
                                    <div className="registration-title text-center">
                                        <h3>Deposez vos candidature</h3>
                                    </div>
                                    <form id="form_registration" className="form" onSubmit={formSubmit}>
                                        <p className="form-control">
                                            <label htmlFor="registration_fname">Nom</label>
                                            <input type="text" placeholder="Entrez votre nom" id="registration_fname" name="name" value={formData.name} onChange={handleInputChange} />
                                            <span className="registration_input-msg"></span>
                                        </p>
                                        <p className="form-control">
                                            <label htmlFor="registration_email">Email</label>
                                            <input type="email" placeholder="Entrez votre email" id="registration_email" name="email" value={formData.email} onChange={handleInputChange} />
                                            <span className="registration_input-msg"></span>
                                        </p>
                                        <div className="form-control my-3">
                                            <label className="mb-1 text-gray-600">Selectionner le service voulu</label>
                                            <select
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleInputChange}
                                                className="border rounded text-lg font-medium px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500 block w-full"
                                            >
                                                <option className="py-1 border border-gray-400 text-lg font-medium">Choisir un service</option>
                                                <option className="py-1 border border-gray-900" value="Voyage d'études">Voyage d'études</option>
                                                <option className="py-1 border border-gray-900" value="Voyage d'affaires">Voyage d'affaires</option>
                                                <option className="py-1 border border-gray-900" value="Formations professionnelles">Formations professionnelles</option>
                                                <option className="py-1 border border-gray-900" value="Co-working">Co-working</option>
                                                <option className="py-1 border border-gray-900" value="Vente de billets d'avion<">Vente de billets d'avion</option>
                                            </select>
                                            <span className="registration_input-msg"></span>
                                        </div>
                                        
                                                    <p className="form-cotrol  mt-8 ">
                                                       <textarea name="message" id="form-cotrol" className='w-full' placeholder="Enter Message" value={formData.message} onChange={handleInputChange}></textarea>
                                                        
                                                    </p>
                                                
                                        
                                         {/* <div className="mt-2">
                                            <label className="mb-1">Votre dossier</label>
                                            <input type="file" className="w-full py-3 pl-4 text-lg font-medium border border-gray-300"   name="message" onChange={handleInputChange} />
                                        </div>  */}
                                        <button type="submit" className="button mt-8 bg-[#000000]" disabled={isLoading}>
                                            {isLoading ? 'En cours...' : 'Envoyez'}
                                        </button>
                                        
                                        {response && <p>{response}</p>}
                                        {error && <p>{error}</p>}
                                    </form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        </Styles>
    );
}

export default Register;
