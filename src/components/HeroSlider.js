import React, {  useEffect } from 'react';
import Datas from '../data/hero/hero-slider.json';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Swiper from 'react-id-swiper';
import { Styles } from "./styles/heroSlider.js";
        //Import Mixpanel SDK
import mixpanel from 'mixpanel-browser';
 
const HeroSlider= () => {
    
        const settings = {
            slidesPerView: 1,
            loop: true,
            speed: 3000,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            watchSlidesVisibility: true,
            effect: 'fade',
            navigation: {
                nextEl: '.slider-button-next',
                prevEl: '.slider-button-prev'
            },
            renderPrevButton: () => (
                <div className="swiper-btn slider-button-prev"><i className="flaticon-arrow-left-th"></i></div>
            ),
            renderNextButton: () => (
                <div className="swiper-btn slider-button-next"><i className="flaticon-arrow-right-th"></i></div>
            )
        };

         useEffect(()=>{
             mixpanel.init('cf58374d1db438e038dc6a210e0f02f1', {
            debug: true, 
            track_pageview: true, 
            persistence: 'localStorage'}
        
        );

        mixpanel.track('neocompany_site')
         }, [] )   
       

        return (
            <Styles>
                {/* Hero Slider */}
                <section className="hero-slider-area">
                    <Swiper {...settings}>
                        {
                            Datas.map((data, i) => (
                                <div className="slider-item" key={i}>
                                    <div className="image-container">
                                        <img src={process.env.PUBLIC_URL + `/assets/images/${data.backgroundImage}`} className="slider-image" alt={data.backgroundImage} />
                                    </div>
                                    <div className="slider-table">
                                        <div className="slider-tablecell">
                                            <Container>
                                                <Row>
                                                    <Col md="12">
                                                        <div className={data.uniqClass}>
                                                            <div className="slider-title">
                                                                <p>{data.title}</p>
                                                            </div>
                                                            <div className="slider-desc">
                                                                <h1>{data.desc}</h1>
                                                            </div>
                                                            <div className="slider-btn">
                                                                <Link className="slider-btn1" to={'/course-list'}>Nos formations</Link>
                                                                <Link className="slider-btn2" to={ `/${data.btnTwoLink}`}>Contactez-nous</Link>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Swiper>
                </section>
            </Styles>
        )
    }


export default HeroSlider
