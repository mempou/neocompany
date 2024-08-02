import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Styles } from "./styles/mobileMenu.js";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

function MobileMenu() {
    useEffect(() => {
        // Mobile Menu
        const hmBtn = document.getElementById("mb-sidebar-btn");

        if (hmBtn) {
            const mdSidebarOverlay = document.getElementById("mb-sidebar-overlay");
            const mdSidebarBody = document.getElementById("mb-sidebar-body");
            const mdSidebarExit = document.getElementById("close-mb-sidebar");

            hmBtn.addEventListener("click", function (e) {
                e.preventDefault();
                mdSidebarOverlay.classList.toggle("visible");
                mdSidebarBody.classList.toggle("opened");
            });

            mdSidebarOverlay.addEventListener("click", function (e) {
                e.preventDefault();
                mdSidebarOverlay.classList.remove("visible");
                mdSidebarBody.classList.remove("opened");
            });

            mdSidebarExit.addEventListener("click", function (e) {
                e.preventDefault();
                mdSidebarOverlay.classList.remove("visible");
                mdSidebarBody.classList.remove("opened");
            });
        }

        // Menu Accordion -----------------
        const menuButton = document.querySelectorAll(".mb-menu-button");
        menuButton.forEach(button => {
            button.addEventListener("click", () => {
                button.classList.toggle("active");
                const content = button.nextElementSibling;

                if (button.classList.contains("active")) {
                    content.className = "mb-menu-content show";
                    content.style.maxHeight = content.scrollHeight + "px";
                } else {
                    content.className = "mb-menu-content";
                    content.style.maxHeight = "0";
                }
            });
        });
    });

    return (
        <Styles>
            {/* Mobile Menu */}
            <section className="mobile-menu-area">
                <Container>
                    <Row>
                        <Col md="0" sm="12">
                            <div className="mb-topbar d-flex justify-content-between">
                                <div className="topbar-item">
                                    <p><i className="las la-phone"></i>+237 679 298 548</p>
                                </div>
                                <div className="topbar-item">
                                    {/* <ul className="list-unstyled list-inline">
                                        <li className="list-inline-item"><Link to={process.env.PUBLIC_URL + "/login"}>Log In</Link></li>
                                        <li className="list-inline-item">/</li>
                                        <li className="list-inline-item"><Link to={process.env.PUBLIC_URL + "/registration"}>Register</Link></li>
                                    </ul> */}
                                </div>
                            </div>
                            <div className="mb-logo-area d-flex justify-content-between">
                                <div className="mb-logo-box d-flex">
                                    <div className="hm-button">
                                        <a href={process.env.PUBLIC_URL + "/"} id="mb-sidebar-btn">
                                            <i className="las la-bars"></i>
                                        </a>
                                    </div>
                                    <div className="mb-logo">
                                        <Link to={process.env.PUBLIC_URL + "/"}><img src={process.env.PUBLIC_URL + "/assets/images/Logo-Default.svg"} alt="" /></Link>
                                    </div>
                                </div>
                                <div className="mb-search-box">
                                    {/* <form action="#">
                                        <input type="text" name="search" placeholder="Search Here" />
                                        <button type="submit"><i className="las la-search"></i></button>
                                    </form> */}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Mobile Menu Sidebar */}
            <section className="mb-sidebar" id="mb-sidebar-body">
                <div className="mb-sidebar-heading d-flex justify-content-between">
                    <div><h5>Menu</h5></div>
                    <div><a href={process.env.PUBLIC_URL + "/"} id="close-mb-sidebar"><i className="las la-times"></i></a></div>
                </div>
                <div className="mb-sidebar-menu">
                    <div className="mb-menu-item">
                        <button className="mb-menu-button active">
                        <li><Link to={process.env.PUBLIC_URL + "/"}>Accueil</Link></li>
                        </button>
                        {/* <div className="mb-menu-content show">
                            <ul className="list-unstyled">
                                <li><Link to={process.env.PUBLIC_URL + "/"}>Home Style 1</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + "/home-two"}>Home Style 2</Link></li>
                            </ul>
                        </div> */}
                    </div>
                    <div className="mb-menu-item">
                        <button className="mb-menu-button active">
                        {/* <li><Link to={process.env.PUBLIC_URL + "/"}> Services</Link></li> */}
                        <ScrollLink
                                                    className="mb-menu-button active"
                                                    to="course-filter"
                                                    smooth={true}
                                                    duration={500}
                                                    offset={-70}
                                                >
                                                    Services
                                                    </ScrollLink>
                        </button>
                        <div className="mb-menu-content show">
                            <ul className="list-unstyled">
                                {/* <li><Link to={process.env.PUBLIC_URL + "#service"}>Nos services</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + "/course-grid"}>Formations</Link></li> */}
                                {/* <li><Link to={process.env.PUBLIC_URL + "/login"}>Log In</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + "/registration"}>Registration</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + "/contact"}>Contact</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + "/faq"}>Faq</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + "/404"}>404</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + "/coming-soon"}>Coming Soon</Link></li> */}
                            </ul>
                        </div>
                    </div>
                    <div className="mb-menu-item">
                        <button className="mb-menu-button active">
                        <li><Link to={process.env.PUBLIC_URL + "/course-list"}>Formations</Link></li>
                        </button>
                        {/* <div className="mb-menu-content show">
                            <ul className="list-unstyled">
                                <li><Link to={process.env.PUBLIC_URL + "/course-grid"}>Formations</Link></li>
                                
                                
                            </ul>
                        </div> */}
                    </div>
                    <div className="mb-menu-item">
                        <button className="mb-menu-button">
                        <li><Link to={process.env.PUBLIC_URL + "/instructor"}>Team</Link></li>
                        </button>
                        {/* <div className="mb-menu-content">
                            <ul className="list-unstyled">
                                <li><Link to={process.env.PUBLIC_URL + "/instructor"}>Team</Link></li>
                                {/* <li><Link to={process.env.PUBLIC_URL + "/instructor-details"}>Team</Link></li> 
                            </ul>
                        </div> */}
                    </div>
                    <div className="mb-menu-item">
                        <button className="mb-menu-button">
                        <li><Link to={process.env.PUBLIC_URL + "/events"}>Actualites</Link></li>
                        </button>
                         {/* <div className="mb-menu-content">
                            <ul className="list-unstyled">
                                <li><Link to={process.env.PUBLIC_URL + "/events"}>Events</Link></li>
                               <li><Link to={process.env.PUBLIC_URL + "/event-details"}>Event Details</Link></li>
                            </ul>
                        </div> */}
                    </div>
                    <div className="mb-menu-item">
                        <button className="mb-menu-button">
                        <li><Link to={process.env.PUBLIC_URL + "/blog-grid"}>Blog </Link></li>
                        </button>
                        {/* <div className="mb-menu-content">
                            <ul className="list-unstyled">
                                
                                <li><Link to={process.env.PUBLIC_URL + "/blog-grid"}>Blog </Link></li>
                                
                            </ul>
                        </div> */}
                    </div>
                    {/* <div className="mb-menu-item">
                        <button className="mb-menu-button">
                            <p>Shop <i className="las la-plus"></i></p>
                        </button>
                        <div className="mb-menu-content">
                            <ul className="list-unstyled">
                                <li><Link to={process.env.PUBLIC_URL + "/products"}>Products</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + "/product-details"}>Product Details</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + "/cart"}>Cart</Link></li>
                            </ul>
                        </div>
                    </div> */}
                </div>
            </section>
            <div className="mb-sidebar-overlay" id="mb-sidebar-overlay"></div>
        </Styles>
    )
}

export default MobileMenu