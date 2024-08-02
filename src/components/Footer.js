
import Datas from '../data/footer/footer.json';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import BackToTop from './common/BackToTop';
import { Styles } from "./styles/footerOne.js";
import React, {Component , useState, useEffect } from 'react';


const Footer = () => {
    const [alldata, setAllData] = useState([]);

    // Utility function to strip HTML tags
    function stripHTML(html) {
        let doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || "";
    }

    // Wrapper component to use the utility function
    const TextWrapper = ({ html }) => {
        return <>{stripHTML(html)}</>;
    }

    useEffect(() => {
        fetch("https://www.admin.neocompany.org/index.php/wp-json/wp/v2/posts?per_page=2")
            .then((res) => res.json())
            .then((data) => {
                console.log('data', data);
                setAllData(data);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const formatDateTime = (dateTimeString) => {
        const date = new Date(dateTimeString);
    
        // Options for formatting the date and time
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        };
    
        return date.toLocaleString('en-US', options);
    };

        return (
            <Styles>
                {/* Footer Area */}
                <footer className="footer1" >
                    <Container>
                        <Row>
                            <Col md="4">
                                <div className="footer-logo-info">
                                    <img src={process.env.PUBLIC_URL + "/assets/images/Logo-Default.svg"} alt="" className="img-fluid" />
                                    <p>La Solution pour votre projet a l'etranger.</p>
                                    <ul className="list-unstyled">
                                        <li><i className="las la-map-marker"></i>Bonamoussadi-Douala, Cameroun</li>
                                        <li><i className="las la-envelope"></i>contact@neocompany.org</li>
                                        <li><i className="las la-phone"></i>+237 6 91 00 85 48</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md="4">
                                <div className="f-links">
                                    <h5>Lien utiles</h5>
                                    <ul className="list-unstyled">
                                        <li><Link to={process.env.PUBLIC_URL + "/"}><i className="las la-angle-right"></i>Accueil</Link></li>
                                        <li><Link to={process.env.PUBLIC_URL + "/course-list"}><i className="las la-angle-right"></i>Formations</Link></li>
                                        <li><Link to={process.env.PUBLIC_URL + "/"}><i className="las la-angle-right"></i>Services</Link></li>
                                        {/* <li><Link to={process.env.PUBLIC_URL + "/"}><i className="las la-angle-right"></i>Privacy Policy</Link></li> */}
                                        <li><Link to={process.env.PUBLIC_URL + "/faq"}><i className="las la-angle-right"></i>Faq</Link></li>
                                    </ul>
                                   
                                </div>
                            </Col>
                            <Col md="4">
                                <div className="f-post">
                                    <h5>Posts recents</h5>
                                    {alldata.map((data, i) => (
                                        <div className="post-box d-flex" key={i} >
                                            <div className="post-img">
                                                <img src={process.env.PUBLIC_URL + "/assets/images/banner5.jpg"} alt="" />
                                            </div>
                                            <div className="post-content">
                                                <Link to={process.env.PUBLIC_URL + `/blog/postDetail/${data.id} ` }>{data.title.rendered} </Link>
                                                <span> {formatDateTime(data.date)} </span>
                                            </div>
                                        </div> 
                                    ))}
                                  
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </footer>

                {/* Copyright Area */}
                <section className="copyright-area">
                    <Container>
                        <Row>
                            <Col md="6">
                                <div className="copy-text">
                                    <p>Copyright &copy; 2024 | Neocompany</p>
                                </div>
                            </Col>
                            <Col md="6" className="text-right">
                                <ul className="social list-unstyled list-inline">
                                    <li className="list-inline-item"><a href={"https://web.facebook.com/agenceneocompany/?_rdc=1&_rdr"} target='_blank' rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                                    {/* <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-twitter"></i></a></li> */}
                                    <li className="list-inline-item"><a href={"https://www.linkedin.com/company/neocompany237/"} target='_blank' rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
                                    
                                </ul>
                            </Col>
                        </Row>
                    </Container>

                    {/* Back To Top */}
                    <BackToTop/>
                </section>
            </Styles>
        )
    
}

export default Footer
