import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import ReviewForm from './components/ReviewForm';
import PopularCourse from './components/PopularCourse';
import CourseTag from './components/CourseTag';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/course.js';
import { useParams } from 'react-router-dom';
import Datas from '../../data/course/filter.json';


function CourseDetails() {
    const { id } = useParams(); 
    useEffect(() => {
        const courseButton = document.querySelectorAll(".course-button");
        courseButton.forEach(button => {
            button.addEventListener("click", () => {
                button.classList.toggle("active");
                const content = button.nextElementSibling;

                if (button.classList.contains("active")) {
                    content.className = "course-content show";
                    content.style.maxHeight = content.scrollHeight + "px";
                } else {
                    content.className = "course-content";
                    content.style.maxHeight = "0";
                }
            });
        });
    });
    const [course, setCourse] = useState({});

    const fetchCourseById = (courseTitle) => {
      const courseData = Datas.dataList.find(item => item.courseTitle === courseTitle);
      setCourse(courseData);
    };
  
    useEffect(() => {
      fetchCourseById(id); // Call this function with the desired id
    }, []);
    
    const renderService = (service) => {
        const words = service.split(' ');
        const firstTwoWords = words.slice(0, 2).join(' ');
        const restOfWords = words.slice(2).join(' ');
    
        return (
          <p>
            <strong>{firstTwoWords}</strong> {restOfWords}
          </p>
        );
      };

    return (
        <div className="main-wrapper course-details-page" >

            {/* Header 2 
            < HeaderTwo />*/}

            {/* Breadcroumb{
                Datas.dataList.map((data, i) => ())} */}
            
                     < BreadcrumbBox title={'Services'} />                    
            
           

            <Styles>
                {/* Course Details */}
                <section className="course-details-area">
                    <Container>
                        <Row>
                            <Col lg="9" md="8" sm="12">
                                
                                <div className="course-details-top"  >
                                    <div className="heading">
                                        <h4>{course.courseTitle} </h4>
                                    </div>
                                   
                                    <div className="course-details-banner">
                                        <img src={process.env.PUBLIC_URL + `/assets/images/${course.imgUrl}`} alt="" className="img-fluid" />
                                    </div>
                                    <div className="course-tab-list">
                                        <Tab.Container defaultActiveKey="overview">
                                            <Nav className="flex-column">
                                                <Nav.Item>
                                                    <Nav.Link eventKey="overview">Overview</Nav.Link>
                                                </Nav.Item>
                                               
                                            </Nav>
                                            <Tab.Content>
                                                <Tab.Pane eventKey="overview" className="overview-tab">
                                                    <div className="course-desc">
                                                        <h5> Description</h5>
                                                        <p>{course.courseDesc} </p>
                                                    </div>
                                                    <div className="course-feature">
                                                        <h5>Nos services comprennent : </h5>
                                                         <ul className="list-unstyled">
                                                            {course?.services?.map((service, index) => (
                                                                <li key={index}><i className="las la-arrow-right"></i>{renderService(service)} </li>
                                                            ))}
                                                            </ul>
                                                    </div>
                                                   
                                                    
                                                    
                                                </Tab.Pane>
                                               
                                            </Tab.Content>
                                        </Tab.Container>
                                    </div>
                                </div>
                            </Col>
                          
                        </Row>
                    </Container>
                </section>
            </Styles>

            {/* Footer 2 */}
            <FooterTwo />

        </div >
    )
}

export default CourseDetails