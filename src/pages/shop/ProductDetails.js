import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { Container, Row, Col, Tab, Nav, Table } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Quantity from './components/Quantity';
import ReviewForm from './../courses/components/ReviewForm';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/productDetails.js';
import Datas from '../../data/instructor/instructor.json';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {

        const [student, setStudent] = useState({});
        const { id } = useParams(); 
        const fetchCourseById = (id) => {
          const studentData = Datas.find(item => item.id === id);
          setStudent(studentData);
        };
      
        useEffect(() => {
          fetchCourseById(id); // Call this function with the desired id
        }, []);

        return (
            <Styles>
                {/* Main Wrapper */}
                <div className="main-wrapper product-details-page">

                    {/* Header 2
                    <HeaderTwo /> */}

                    {/* Breadcroumb */}
                    <BreadcrumbBox title="students Details" />

                    {/* Product Details */}
                    <section className="product-details-area">
                        <Container>
                            <Row>
                                <Col md="5">
                                    <div className="product-slider">
                                        
                                           
                                                    <div className="slider-item" >
                                                        <img src={`/assets/images/${student?.personImage}`} alt="" className="img-fluid" />
                                                    </div>
                                                
                                            
                                       
                                    </div>
                                </Col>

                                <Col md="7">
                                    <div className="product-information">
                                        <div className="product-title">
                                            <h4>{student?.personName} </h4>
                                        </div>
                                       
                                        <div className="product-price d-flex">
                                            <p className="dc-price">{student?.niveau} </p>
                                        </div>
                                        <div className="product-desc">
                                            <p> {student?.comment} </p>
                                        </div>
                                       
                                        
                                    </div>
                                </Col>

                                
                            </Row>
                        </Container>
                    </section>

                    {/* Footer 2 */}
                    <FooterTwo />

                </div>
            </Styles>
        )
    }


export default ProductDetails