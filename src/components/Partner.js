import React, { Component } from 'react';
import Datas from '../data/team/Partner.json';
import { Container, Row, Col } from 'react-bootstrap';
import Swiper from 'react-id-swiper';
import { Styles } from "./styles/teamSlider.js";
import { Link } from 'react-router-dom'

class Partner extends Component {
    render() {
        const settings = {
            slidesPerView: 4,
            loop: true,
            speed: 1000,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            spaceBetween: 30,
            watchSlidesVisibility: true,
            pagination: {
                el: '.slider-dot.text-center',
                clickable: true
            },
            breakpoints: {
                0: {
                    slidesPerView: 1
                },
                576: {
                    slidesPerView: 2
                },
                768: {
                    slidesPerView: 3
                },
                992: {
                    slidesPerView: 4
                }
            }
        };

        return (
            <Styles>
                {/* Team Slider */}
                <section className="team-member-area" >
                    <Container>
                        <Row>
                            <Col md="12">
                                <div className="sec-title text-center">
                                    <h4>{Datas.secTitle}</h4>
                                </div>
                            </Col>
                            <Col md="12" className="team-slider">
                                <Swiper {...settings}>
                                    {
                                        Datas.dataList.map((data, i) => (
                                            <a href={data.link} className="team-item" key={i} target='_blank' rel="noopener noreferrer">
                                                <img src={`/assets/images/${data.personImage}`} alt="" className="img-fluid" />
                                                
                                            </a>
                                        ))
                                    }
                                </Swiper>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Styles>
        )
    }
}

export default Partner
