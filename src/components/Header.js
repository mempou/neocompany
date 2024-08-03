import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import Search from './common/Search';
import Sidebar from './common/Sidebar';
import StickyMenu from './common/StickyMenu';
import MobileMenu from './common/MobileMenu';
import { Styles } from "./styles/header.js";

class Header extends Component {
    render() {
        return (
            <Styles>
                {/* Topbar */}
                <section className="top-bar">
                    <Container>
                        <Row>
                            <Col lg="6" md="5">
                                <div className="bar-left">
                                    <ul className="list-unstyled list-inline">
                                        <li className="list-inline-item"><i className="las la-map-marker"></i>Douala, Cameroun</li>
                                        <li className="list-inline-item"><Link to={ "/faq"}>Questions</Link></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg="6" md="7">
                                <div className="bar-right d-flex justify-content-end">
                                    <ul className="list-unstyled list-inline bar-social">
                                        <li className="list-inline-item"><a href={"https://web.facebook.com/agenceneocompany"}><i className="fab fa-facebook-f"></i></a></li>
                                        <li className="list-inline-item"><a href={"https://www.linkedin.com/company/neocompany237/"}><i className="fab fa-linkedin-in"></i></a></li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* Logo Area */}
                <section className="logo-area">
                    <Container>
                        <Row>
                            <Col md="3">
                                <div className="logo">
                                    <Link to={process.env.PUBLIC_URL + "/"}><img src={process.env.PUBLIC_URL + "/assets/images/Logo-Default.svg"} alt="" /></Link>
                                </div>
                            </Col>
                            <Col md="9">
                                <div className="logo-contact-box d-flex justify-content-end">
                                    <div className="emcontact-box d-flex">
                                        {/* <div className="box-icon">
                                            <i className="flaticon-phone-call"></i>
                                        </div> */}
                                        <div className="box-content">
                                            <p>Appelez-nous</p>
                                            <span>+237 679 298 548</span>
                                        </div>
                                    </div>
                                    <div className="emcontact-box d-flex">
                                        {/* <div className="box-icon">
                                            <i className="flaticon-envelope"></i>
                                        </div> */}
                                        <div className="box-content">
                                            <p>Demande d'informations</p>
                                            <span>contact@neocompany.org</span>
                                        </div>
                                    </div>
                                    <div className="apply-btn">
                                        <Link to={process.env.PUBLIC_URL + "/registration"}><i className="las la-clipboard-list"></i>Déposer </Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* Navbar */}
                <section className="main-menu">
                    <Container>
                        <Row>
                            <Col md="12">
                                <div className="main-menu-box">
                                    <div className="menu-box d-flex justify-content-between">
                                        <ul className="nav menu-nav">
                                            <li className="nav-item dropdown active">
                                                <Link
                                                    className="nav-link"
                                                    to="/"
                                                    
                                                    // Adjust the offset value to position the scroll
                                                >
                                                    Accueil
                                                </Link>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <ScrollLink
                                                    className="nav-link"
                                                    to="course-filter"
                                                    smooth={true}
                                                    duration={500}
                                                    offset={-70}
                                                >
                                                    Services
                                                </ScrollLink>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link
                                                    className="nav-link"
                                                    to="/course-list"
                                                    smooth={true}
                                                    duration={500}
                                                    offset={-70}
                                                >
                                                    Formations
                                                </Link>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <ScrollLink
                                                    className="nav-link"
                                                    to="instructor"
                                                    smooth={true}
                                                    duration={500}
                                                    offset={-70}
                                                >
                                                    Equipes
                                                </ScrollLink>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link
                                                    className="nav-link"
                                                    to="/events"
                                                    smooth={true}
                                                    duration={500}
                                                    offset={-70}
                                                >
                                                    Actualites
                                                </Link>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link
                                                    className="nav-link"
                                                    to="/students"
                                                    smooth={true}
                                                    duration={500}
                                                    offset={-70}
                                                >
                                                    Etudiants
                                                </Link>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link
                                                    className="nav-link"
                                                    to="/blog-grid"
                                                    smooth={true}
                                                    duration={500}
                                                    offset={-70}
                                                >
                                                    NeoBlog
                                                </Link>
                                            </li>
                                        </ul>
                                        <ul className="nav search-cart-bar">
                                            <li className="nav-item side-box">
                                                <Sidebar />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* Sticky Menu */}
                <StickyMenu />

                {/* Mobile Menu */}
                <MobileMenu />
            </Styles>
        )
    }
}

export default Header;
