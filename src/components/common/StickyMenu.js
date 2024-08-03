import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Styles } from "./styles/stickyMenu.js";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';


function StickyMenu() {
    useEffect(() => {
        window.addEventListener("scroll", () => {
            const stickyMenu = document.querySelector(".sticky-menu");

            if (window.scrollY > 160) {
                stickyMenu?.classList.add("sticky");
            } else {
                stickyMenu?.classList.remove("sticky");
            }
        });
    });

    return (
        <Styles>
            {/* Sticky Menu */}
            <section className="sticky-menu">
                <Container>
                    <Row>
                        <Col md="3">
                            <div className="logo">
                                <Link to={process.env.PUBLIC_URL + "/"}><img src={process.env.PUBLIC_URL + "/assets/images/Logo-Default.svg"} alt="" /></Link>
                            </div>
                        </Col>
                        <Col md="9">
                            <div className="menu-box d-flex justify-content-end">
                                <ul className="nav menu-nav">
                                    <li className="nav-item dropdown active">
                                        <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/"} data-toggle="dropdown">Accueil </Link>
                                        {/* <ul className="dropdown list-unstyled">
                                            <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>Home Style 1</Link><i className="las la-angle-down"></i></li>
                                            <li className="nav-item active"><Link className="nav-link" to={process.env.PUBLIC_URL + "/home-two"}>Home Style 2</Link></li>
                                        </ul> */}
                                    </li>
                                    <li className="nav-item dropdown">
                                        {/* <Link className="" to={process.env.PUBLIC_URL + "/"} data-toggle="dropdown">Services </Link> */}
                                        <ScrollLink
                                                    className="nav-link dropdown-toggle"
                                                    to="course-filter"
                                                    smooth={true}
                                                    duration={500}
                                                    offset={-70}
                                                >
                                                    Services
                                        </ScrollLink>
                                        <ul className="dropdown list-unstyled">

                                            {/*<li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "#service"}>Services</Link></li>
                                             <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/course-list"}>Formations</Link></li> */}
                                            {/* <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/login"}>Log In</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/registration"}>Registration</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/contact"}>Contact</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/faq"}>Faq</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/404"}>404</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/coming-soon"}>Coming Soon</Link></li> */}
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/course-list"} data-toggle="dropdown">Formations </Link>
                                        {/* <ul className="dropdown list-unstyled">
                                            <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/course-grid"}>Nos services</Link></li><i className="las la-angle-down"></i>
                                            <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/course-list"}>Course List</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/course-details"}>Course Details</Link></li>
                                        </ul> */}
                                    </li>
                                    <li className="nav-item dropdown">
                                        <ScrollLink 
                                            className="nav-link dropdown-toggle" 
                                            to="instructor"
                                            data-toggle="dropdown"
                                            smooth={true}
                                            duration={500}
                                            offset={-70}
                                        >
                                            Equipes 
                                        </ScrollLink>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/events"} data-toggle="dropdown">Actualites</Link>
                                        {/* <ul className="dropdown list-unstyled">
                                            <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/events"}>Events</Link></li> <i className="las la-angle-down"></i>
                                            <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/event-details"}>Event Details</Link></li>
                                        </ul> */}
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
                                        <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/blog-grid"} data-toggle="dropdown">NeoBlog </Link>
                                        {/* <ul className="dropdown list-unstyled">
                                            {/* <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/blog-classic"}>Blog Classic</Link></li><i className="las la-angle-down"></i>
                                            <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/blog-grid"}>Blog Grid</Link></li>
                                             <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/blog-details"}>Blog Details</Link></li> 
                                        </ul> */}
                                    </li>
                                    {/* <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/"} data-toggle="dropdown">Shop <i className="las la-angle-down"></i></Link>
                                        <ul className="dropdown list-unstyled">
                                            <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/products"}>Products</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/product-details"}>Product Details</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/cart"}>Cart</Link></li>
                                        </ul>
                                    </li> */}
                                </ul>
                                <div className="apply-btn">
                                    <Link to={process.env.PUBLIC_URL + "/registration"}><i className="las la-clipboard-list"></i>Deposer </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Styles>
    )
}

export default StickyMenu