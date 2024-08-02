import React, { useEffect } from 'react';
import Datas from '../data/footer/footer2.json';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import BackToTop from './common/BackToTop';
import { Styles } from "./styles/footerTwo.js";

function FooterTwo() {
    // useEffect(() => {
    //     const form = document.getElementById("form4");
    //     const email = document.getElementById("email4");

        

    //     function formSubmit(e) {
    //         e.preventDefault();

    //         const emailValue = email.value.trim();

    //         if (emailValue === "") {
    //             setError(email, "Email can't be blank");
    //         } else if (!isEmail(emailValue)) {
    //             setError(email, "Not a valid email");
    //         } else {
    //             setSuccess(email);
    //         }
    //     }

    //     function setError(input, message) {
    //         const formControl = input.parentElement;
    //         const errorMsg = formControl.querySelector(".input-msg4");
    //         formControl.className = "form-control error";
    //         errorMsg.innerText = message;
    //     }

    //     function setSuccess(input) {
    //         const formControl = input.parentElement;
    //         formControl.className = "form-control success";
    //     }

    //     function isEmail(email) {
    //         return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    //     }
    // });

    return (
        <Styles>
            {/* Footer Two */}
            <footer className="footer2" >
                <Container>
                    <Row>
                        <Col md="4">
                            <div className="footer-logo-info">
                                <img src={ "/assets/images/Logo-Default.svg"} alt="" className="img-fluid" />
                                <p>La Solution pour votre projet d'etude a l'etranger.</p>
                                <ul className="list-unstyled">
                                    <li><i className="las la-map-marker"></i>Bonamoussadi-Douala, Cameroun</li>
                                    <li><i className="las la-envelope"></i>contact@neocompany.org</li>
                                    <li><i className="las la-phone"></i>+237 608 875 678</li>
                                </ul>
                            </div>
                        </Col>
                        <Col md="4">
                            <div className="f-links">
                                <h5>Lien utiles</h5>
                                <ul className="list-unstyled">
                                    <li><Link to={ "/blog-grid"}><i className="las la-angle-right"></i>Blog</Link></li>
                                    <li><Link to={ "/instructor"}><i className="las la-angle-right"></i>Equipe</Link></li>
                                    <li><Link to={ "/events"}><i className="las la-angle-right"></i>Actualites</Link></li>
                                    {/* <li><Link to={ "/"}><i className="las la-angle-right"></i>Privacy Policy</Link></li> */}
                                    <li><Link to={ "/faq"}><i className="las la-angle-right"></i>Faq</Link></li>
                                </ul>
                            </div>
                        </Col>
                      
                        {/* <Col md="4">
                            <div className="f-newsletter">
                                <h5>Newsletter</h5>
                                <p>Lorem ipsum dolor sit amet, consectet adipisicing elit.</p>

                                <form id="form4" className="form">
                                    <p className="form-control">
                                        <input type="email" placeholder="Enter email here" id="email4" />
                                        <span className="input-msg4"></span>
                                    </p>
                                    <button>Submit</button>
                                </form>
                            </div>
                        </Col> */}
                        <Col md="12">
                            <div className="copytext-area text-center">
                                <p>Copyright &copy; 2024 | Neocompany </p>
                                <ul className="social list-unstyled list-inline">
                                    <li className="list-inline-item"><a href={"https://web.facebook.com/agenceneocompany/?_rdc=1&_rdr"} target='_blank' rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                                    {/* <li className="list-inline-item"><a href={ "/"}><i className="fab fa-twitter"></i></a></li> */}
                                    <li className="list-inline-item"><a href={"https://www.linkedin.com/company/neocompany237/"} target='_blank' rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
                                    
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>

                {/* Back To Top  */}
                <BackToTop />
            </footer>
        </Styles>
    );
}

export default FooterTwo
