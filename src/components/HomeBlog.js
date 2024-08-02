
import Datas from '../data/blog/home-blog.json';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Styles } from "./styles/homeBlog.js";
import React, { useState, useEffect } from 'react';


const HomeBlog =() => {
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
        fetch("https://www.admin.neocompany.org/index.php/wp-json/wp/v2/posts?per_page=4")
            .then((res) => res.json())
            .then((data) => {
                
                console.log(' data', data);
                setFilteredData(data);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);
        return (
            <Styles>
                {/* Blog Area */}
                <section className="home-blog-area">
                    <Container>
                        <Row>
                            <Col md="12">
                                <div className="sec-title text-center">
                                    <h4>{Datas.secTitle}</h4>
                                </div>
                            </Col>
                            {
                                filteredData.map((data, i) => (
                                    <Col md="6" key={i}>
                                        <div className="blog-post">
                                            <Row>
                                                <Col lg="6" md="12">
                                                    <div className="blog-img">
                                                        <Link to={process.env.PUBLIC_URL + data.postLink}><img src={process.env.PUBLIC_URL + `/assets/images/${data.postImg}`} alt="" className="img-fluid" /></Link>
                                                    </div>
                                                </Col>
                                                <Col lg="6" md="12">
                                                    <div className="blog-content">
                                                        <div className="content-box">
                                                            <div className="top-content d-flex">
                                                                <div className="blog-date text-center">
                                                                    <p>{data.date}</p>
                                                                </div>
                                                                <div className="blog-title">
                                                                    <h6><Link to={process.env.PUBLIC_URL + data.postLink}>{data.title.rendered}</Link></h6>
                                                                </div>
                                                            </div>
                                                            <div className="blog-desk">
                                                                <p>{data.postExcerpt}</p>
                                                                <ul className="list-unstyled list-inline">
                                                                    <li className="list-inline-item"><Link to={process.env.PUBLIC_URL + data.authorLink}><i className="las la-user"></i> Jhon</Link></li>
                                                                    <li className="list-inline-item"><Link to={process.env.PUBLIC_URL + data.commentLink}><i className="las la-comment"></i> 19</Link></li>
                                                                    <li className="list-inline-item"><Link to={process.env.PUBLIC_URL + data.likeLink}><i className="las la-thumbs-up"></i> 37</Link></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>
                                ))
                            }
                        </Row>
                    </Container>
                </section>
            </Styles>
        )
    
}

export default HomeBlog
