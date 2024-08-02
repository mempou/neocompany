import Datas from '../data/faq-event/faq-event.json';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Styles } from "./styles/faqEvent.js";
import React, { useState, useEffect } from 'react';

function FaqEvent() {
    useEffect(() => {
        const accordionButton = document.querySelectorAll(".accordion-button");
        accordionButton.forEach(button => {
            button.addEventListener("click", () => {
                button.classList.toggle("active");
                const content = button.nextElementSibling;

                if (button.classList.contains("active")) {
                    content.className = "accordion-content show";
                    content.style.maxHeight = content.scrollHeight + "px";
                } else {
                    content.className = "accordion-content";
                    content.style.maxHeight = "0";
                }
            });
        });
    }, []);

    const [filteredData, setFilteredData] = useState([]);

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
        fetch("https://www.admin.neocompany.org/index.php/wp-json/wp/v2/posts")
            .then((res) => res.json())
            .then((data) => {
                const filtered = data.filter(post => post.categories.includes(9));
                console.log('filtered data', filtered);
                setFilteredData(filtered);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <Styles>
            {/* Faq & Event */}
            <section className="event-faq-area">
                <Container>
                    <Row>
                        
                        <Col md="6">
                            <div className="faq-area">
                                <div className="sec-title">
                                    <h4>Frequently Ask <span>Question</span></h4>
                                </div>
                                <div className="faq-box">
                                    {
                                        Datas.faqDataList.map((faqData, i) => (
                                            <div className="faq-item" key={i}>
                                                <button className="accordion-button active">
                                                    <div className="accordion-icon"><i className="las la-plus"></i></div>
                                                    <p>{faqData.faqTitle}</p>
                                                </button>
                                                <div className="accordion-content show">
                                                    <p>{faqData.faqDesc}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Styles>
    )
}

export default FaqEvent;
