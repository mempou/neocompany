import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import ReviewForm from './components/ReviewForm';
import PopularCourse from './components/PopularCourse';
import CourseTag from './components/CourseTag';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/course.js';
import { useParams, Link } from 'react-router-dom';
import DOMPurify from 'dompurify';

import Datas from '../../data/course/item.json';

function Formation() {
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
    const [imageData, setImageData] = useState({});

   
    const [postdata, setPostData] = useState({});

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
        fetch(`https://www.admin.neocompany.org/index.php/wp-json/wp/v2/posts/${id}?_embed`)
            .then((res) => res.json())
            .then((data) => {
                console.log('formation data', data);
                setPostData(data);
            })
            .catch((error) => console.error('Error fetching post data:', error));
    }, [id]);
    // useEffect(() => {
    //     fetch(`https://www.admin.neocompany.org/index.php/wp-json/wp/v2/media?parent=${id}`)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log('image data', data);
    //             setImageData(data);
    //         })
    //         .catch((error) => console.error('Error fetching image data:', error));
    // }, [id]);
    
    
    const createMarkup = (html) => {
        return { __html: DOMPurify.sanitize(html) };
    };

    const renderAuthors = () => {
        if (postdata._embedded && postdata._embedded.author) {
            const authors = postdata._embedded.author;
            return authors.length > 1 ? (
                authors.map((author, index) => (
                    <p key={index}><Link to={process.env.PUBLIC_URL + "/"}>{author.name}</Link></p>
                ))
            ) : (
                <p><Link to={process.env.PUBLIC_URL + "/"}>{authors[0].name}</Link></p>
            );
        }
        return null;
    };

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
    

    // const fetchCourseById = (courseTitle) => {
    //   const courseData = Datas.find(item => item?.courseTitle === courseTitle);
    //   setCourse(courseData);
    // };
  
    // useEffect(() => {
    //   fetchCourseById(id); // Call this function with the desired id
    // }, []);
    
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
            < HeaderTwo /> */}

            {/* Breadcroumb{
                Datas.dataList.map((data, i) => ())} */}
            
                     < BreadcrumbBox title={'Formation'} />                    
            
           

            <Styles>
                {/* Course Details */}
                <section className="course-details-area">
                    <Container>
                        <Row>
                            <Col lg="9" md="8" sm="12">
                                
                                <div className="course-details-top"  >
                                    <div className="heading">
                                        <h4>
                                        <div dangerouslySetInnerHTML={{__html: postdata?.title?.rendered}} />
                                        </h4>
                                    </div>
                                   
                                    {/* <div className="course-details-banner">
                                        <img src={process.env.PUBLIC_URL + `${imageData[0]?.media_details?.sizes.full.source_url}`} alt="" className="img-fluid" />
                                    </div> */}
                                    <div className="course-tab-list">
                                        <Tab.Container defaultActiveKey="overview">
                                            
                                            <Tab.Content>
                                                <Tab.Pane eventKey="overview" className="overview-tab">
                                                    {/* <div className="course-desc">
                                                        
                                                      
                                                    </div> */}
                                                    <div className="course-feature">
                                                        
                                                         
                                                           <div className="course-details-banner" dangerouslySetInnerHTML={{__html: postdata?.content?.rendered}} />
                                                                
                                                            
                                                            
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

export default Formation