import React, { useState } from 'react';
import Datas from '../data/about-us/about-us.json';
import { Link, useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ModalVideo from 'react-modal-video';
import CountUp from 'react-countup';
import { Styles } from "./styles/aboutUs.js";
import Modal from 'react-modal';


const AboutUs = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <Styles>
            {/* About Us */}
            <section className="about-us">
                <Container>
                    <Row>
                        <Col md="6">
                            <div className="about-image">
                            {/* https://zoom.us/j/97855323103?pwd=bkdYOFdXZk45Sk56bXRnOVVRclNxdz09 */}
                                <img src={process.env.PUBLIC_URL + `/assets/images/${Datas.mainImage}`} className="main-img" alt="" />
                                <img src={process.env.PUBLIC_URL + "/assets/images/pattern.png"} className="pattern-img" alt="" />
                                 <div className="video-player" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${Datas.videoBackground})`}}>
                                    <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="Video Modal" className="video-player">
                                        {/* <button onClick={closeModal} className="close-button">X</button> */}
                                        <video controls  width="360" className="styled-video">
                                            <source src={`${process.env.PUBLIC_URL}/assets/images/top.mp4`} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </Modal>
                                    {/* <ModalVideo channel='youtube' isOpen={isOpen} videoId='uXFUl0KcIkA' onClose={() => setIsOpen(false)} /> */}
                                    <button onClick={openModal} className="play-button"><i className="las la-play"></i></button>
                                </div>  
                            </div>
                        </Col>
                        <Col md="6">
                            <div className="about-content">
                                <h4 className="about-title">{Datas.title}</h4>
                                <p className="about-para">{Datas.desc1}<span>{Datas.desc2}</span></p>
                                <Row>
                                    <Col sm="4">
                                        <div className="counter-box box1 text-center">
                                            <h3><CountUp end={1250} duration={5} delay={1.5} /><i className="las la-plus"></i></h3>
                                            <p>Des étudiants heureux</p>
                                        </div>
                                    </Col>
                                    <Col sm="4">
                                        <div className="counter-box box2 text-center">
                                            <h3><CountUp end={2} duration={5} delay={1.5} /><i className="las la-plus"></i></h3>
                                            <p>Espace de co-working</p>
                                        </div>
                                    </Col>
                                    <Col sm="4">
                                        <div className="counter-box box3 text-center">
                                            <h3><CountUp end={5} duration={5} delay={1.5} /><i className="las la-plus"></i></h3>
                                            <p>Services</p>
                                        </div>
                                    </Col>
                                </Row>
                                {location.pathname !== '/about' && (
                                    <Link className="readmore-btn" to={process.env.PUBLIC_URL + "/about"}>Lire la suite</Link>
                                )}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Styles>
    );
};

export default AboutUs;
