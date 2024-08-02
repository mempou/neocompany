import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ModalImage from "react-modal-image";
import { Styles } from "./styles/campusTour.js";
import { Link, useLocation } from 'react-router-dom';


const CampusTour = () => {
    const  location = useLocation();

        return (
            <Styles>
                {/* Campus Tour */}
                <section className="campus-tour">
                    <Container>
                        <Row>
                            <Col md="12">
                                <div className="sec-title text-center">
                                    <h4>Nous avons le meilleur campus de la région. Explorons le campus.</h4>
                                </div>
                            </Col>
                            <Col lg="2" md="3">
                                <div className="tour-box">
                                    <ModalImage small={process.env.PUBLIC_URL + "/assets/images/image2.jpg"} large={process.env.PUBLIC_URL + "/assets/images/image2.jpg"} alt="" />
                                </div>
                                <div className="tour-box">
                                    <ModalImage small={process.env.PUBLIC_URL + "/assets/images/image2.jpg"} large={process.env.PUBLIC_URL + "/assets/images/image2.jpg"} alt="" />
                                </div>
                                <div className="tour-box">
                                    <ModalImage small={process.env.PUBLIC_URL + "/assets/images/image8.jpg"} large={process.env.PUBLIC_URL + "/assets/images/image8.jpg"} alt="" />
                                </div>
                            </Col>
                            <Col lg="4" md="6">
                                <Row>
                                    <Col lg="6" md="6">
                                        <div className="tour-box">
                                            <ModalImage small={process.env.PUBLIC_URL + "/assets/images/image4.jpg"} large={process.env.PUBLIC_URL + "/assets/images/image4.jpg"} alt="" />
                                        </div>
                                        <div className="tour-box">
                                            <ModalImage small={process.env.PUBLIC_URL + "/assets/images/gal8.jpg"} large={process.env.PUBLIC_URL + "/assets/images/gal8.jpg"} alt="" />
                                        </div>
                                        <div className="tour-box">
                                            <ModalImage small={process.env.PUBLIC_URL + "/assets/images/gal2.jpg"} large={process.env.PUBLIC_URL + "/assets/images/gal2.jpg"} alt="" />
                                        </div>
                                    </Col>
                                    <Col lg="6" md="6">
                                        <div className="tour-box">
                                            <ModalImage small={process.env.PUBLIC_URL + "/assets/images/heroimage2.jpg"} large={process.env.PUBLIC_URL + "/assets/images/heroimage2.jpg"} alt="" />
                                        </div>
                                        <div className="tour-box">
                                            <ModalImage small={process.env.PUBLIC_URL + "/assets/images/gal3.jpg"} large={process.env.PUBLIC_URL + "/assets/images/gal3.jpg"} alt="" />
                                        </div>
                                        {/* <div className="tour-box">
                                            <ModalImage small={process.env.PUBLIC_URL + "/assets/images/gal4.jpg"} large={process.env.PUBLIC_URL + "/assets/images/gal4.jpg"} alt="" />
                                        </div> */}
                                        <div className="tour-box">
                                            <ModalImage small={process.env.PUBLIC_URL + "/assets/images/gal5.jpg"} large={process.env.PUBLIC_URL + "/assets/images/gal5.jpg"} alt="" />
                                        </div>
                                    </Col>
                                    <Col lg="12">
                                        <div className="tour-box">
                                            <ModalImage small={process.env.PUBLIC_URL + "/assets/images4.jpg"} large={process.env.PUBLIC_URL + "/assets/images/images4.jpg"} alt="" />
                                        </div>
                                    </Col>
                                    <Col lg="12">
                                        <div className="tour-box">
                                            <ModalImage small={process.env.PUBLIC_URL + "/assets/gal6.jpg"} large={process.env.PUBLIC_URL + "/assets/images/gal6.jpg"} alt="" />
                                        </div>
                                        <div className="tour-box">
                                            <ModalImage small={process.env.PUBLIC_URL + "/assets/gal7.jpg"} large={process.env.PUBLIC_URL + "/assets/images/gal7.jpg"} alt="" />
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg="2" md="3">
                                <div className="tour-box">
                                    <ModalImage small={process.env.PUBLIC_URL + "/assets/images/heroimage5_1920x814.jpg"} large={process.env.PUBLIC_URL + "/assets/images/heroimage5_1920x814.jpg"} alt="" />
                                </div>
                                <div className="tour-box">
                                    <ModalImage small={process.env.PUBLIC_URL + "/assets/images/gal9.jpg"} large={process.env.PUBLIC_URL + "/assets/images/gal9.jpg"} alt="" />
                                </div>
                                <div className="tour-box">
                                    <ModalImage small={process.env.PUBLIC_URL + "/assets/images/gal12.jpg"} large={process.env.PUBLIC_URL + "/assets/images/gal12.jpg"} alt="" />
                                </div>
                               
                            </Col>
                            
                            <Col lg="4" md="12">
                                <Row>
                                    <Col lg="12" md="6">
                                        <div className="tour-box">
                                            <ModalImage small={process.env.PUBLIC_URL + "/assets/images/banner3.jpg"} large={process.env.PUBLIC_URL + "/assets/images/banner4.jpg"} alt="" />
                                        </div>
                                    </Col>
                                    <Col lg="6" md="3">
                                        <div className="tour-box">
                                            <ModalImage small={process.env.PUBLIC_URL + "/assets/images/banner2.jpg"} large={process.env.PUBLIC_URL + "/assets/images/banner2.jpg"} alt="" />
                                        </div>
                                    </Col>
                                    <Col lg="6" md="3">
                                        <div className="tour-box">
                                            <ModalImage small={process.env.PUBLIC_URL + "/assets/images/banner.jpg"} large={process.env.PUBLIC_URL + "/assets/images/banner.jpg"} alt="" />
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        {location.pathname !== '/gallery' && (
                                    <Link className="readmore-btn" to={process.env.PUBLIC_URL + "/gallery"}>Lire la suite</Link>
                                )}
                    </Container>
                </section>
            </Styles>
        )
    
}

export default CampusTour
