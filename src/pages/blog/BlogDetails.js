import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import BlogSidebar from './components/BlogSidebar';
import CommentForm from './components/CommentForm';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/blogDetails.js';
import { useParams, Link } from 'react-router-dom';
import DOMPurify from 'dompurify';
import axios from 'axios';


const BlogDetails = () => {
    const { id } = useParams(); 
    const [postdata, setPostData] = useState({});
    const [comments, setComments ] = useState({})
        const [response, setResponse] = useState(null);
        const [ loading, setLoading ] = useState(false)
        const [error, setError] = useState(null);



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
                console.log('post data', data);
                setPostData(data);
            })
            .catch((error) => console.error('Error fetching post data:', error));
    }, [id]);
   

    useEffect(() => {
        fetch(`https://www.admin.neocompany.org/index.php/wp-json/wp/v2/comments?post=${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log('data comments', data);
                setComments(data);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const formSubmit = async (e) => {
        const data = {
        username: 'lucien',
        email: 'luciendjob50@gmail.com'
    };

    try {
        console.log('form data', data)
        setLoading(true)
        const response = await axios.post(`https://www.admin.neocompany.org/index.php/wp-json/wp/v2/comments`, data);
        setLoading(false)
        console.log('comments data response', response)
        setResponse(response.data);
       
        
        setError(null);
    } catch (error) {
        setLoading(false);
        setResponse(null);
        setError('Error submitting form');
    }
    }

    
    
    const createMarkup = (html) => {
        return { __html: DOMPurify.sanitize(html) };
    };

    const renderAuthors = () => {
        if (postdata._embedded && postdata._embedded.author) {
            const authors = postdata._embedded.author;
            return authors.length > 1 ? (
                authors.map((author, index) => (
                    <p key={index}><Link to={"/"}>{author.name}</Link></p>
                ))
            ) : (
                <p><Link to={"/"}>{authors[0].name}</Link></p>
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

    return (
        <Styles>
            {/* Main Wrapper */}
            <div className="main-wrapper blog-details-page">

                {/* Header 2
                <HeaderTwo /> */}

                {/* Breadcrumb */}
                <BreadcrumbBox title={postdata.title?.rendered} />

                {/* Blog Details */}
                <section className="blog-details-area">
                    <Container>
                        <Row>
                            <Col lg="9" md="8" sm="7">
                                <div className="blog-details-box">
                                    <div className="heading">
                                        <h4><TextWrapper html={postdata.title?.rendered} /></h4>
                                    </div>
                                    <div className="blog-auth_date d-flex">
                                        <div className="author-img d-flex">
                                            <Link to={"/"}><img src={`/assets/images/Logo-Default.png`} alt="" className='border' /></Link>
                                           {/*  {renderAuthors()}*/}Neocompany
                                        </div> 
                                        <div className="post-date">
                                            <p><i className="las la-calendar"></i> {formatDateTime(postdata.date)}</p>
                                        </div>
                                        {/* <div className="post-category">
                                            <p><Link to={"/"}><i className="las la-bookmark"></i> Web Design</Link></p>
                                        </div>
                                        <div className="post-comment">
                                            <p><Link to={"/"}><i className="las la-comment"></i> (23)</Link></p>
                                        </div> */}
                                    </div>
                                    <div className="blog-details-desc">
                                        <div dangerouslySetInnerHTML={createMarkup(postdata.content?.rendered)}></div>
                                    </div>

                                    {/*<div className="blog-tag_share d-flex justify-content-between">
                                        <div className="blog-share">
                                            <ul className="social list-unstyled list-inline">
                                                <li className="list-inline-item">Share:</li>
                                                <li className="list-inline-item"><a href={"/"}><i className="fab fa-facebook-f"></i></a></li>
                                                <li className="list-inline-item"><a href={"/"}><i className="fab fa-twitter"></i></a></li>
                                                <li className="list-inline-item"><a href={"/"}><i className="fab fa-linkedin-in"></i></a></li>
                                                
                                            </ul>
                                        </div>
                                    </div>
                                     <div className="blog-comments">
                                        <h5>Comments (03)</h5>
                                        <div className="comment-box d-flex">
                                            <div className="comment-image">
                                                <img src={`/assets/images/testimonial-2.jpg`} alt="" />
                                            </div>
                                            <div className="comment-content">
                                                <div className="content-title d-flex justify-content-between">
                                                    <div className="comment-writer">
                                                        <h6>Mark Shadow</h6>
                                                        <p>Mar 26, 2020 | 06:30pm</p>
                                                    </div>
                                                    <div className="reply-btn">
                                                        <button type="button"><i className="las la-reply-all"></i> Reply</button>
                                                    </div>
                                                </div>
                                                <div className="comment-desc">
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laborum quas placeat perspiciatis est, nisi expedita consectetur sit minus illum laudantium nostrum dolore odit asperiores quisquam ad enim iusto laborum quas placeat perspiciatis saepe.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="comment-box d-flex">
                                            <div className="comment-image">
                                                <img src={`/assets/images/testimonial-1.jpg`} alt="" />
                                            </div>
                                            <div className="comment-content">
                                                <div className="content-title d-flex justify-content-between">
                                                    <div className="comment-writer">
                                                        <h6>Katrin Kay</h6>
                                                        <p>Mar 26, 2020 | 06:30pm</p>
                                                    </div>
                                                    <div className="reply-btn">
                                                        <button type="button"><i className="las la-reply-all"></i> Reply</button>
                                                    </div>
                                                </div>
                                                <div className="comment-desc">
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laborum quas placeat perspiciatis est, nisi expedita consectetur sit minus illum laudantium nostrum dolore odit asperiores quisquam ad enim iusto laborum quas placeat perspiciatis saepe.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="comment-box d-flex">
                                            <div className="comment-image">
                                                <img src={`/assets/images/testimonial-2.jpg`} alt="" />
                                            </div>
                                            <div className="comment-content">
                                                <div className="content-title d-flex justify-content-between">
                                                    <div className="comment-writer">
                                                        <h6>David Show</h6>
                                                        <p>Mar 26, 2020 | 06:30pm</p>
                                                    </div>
                                                    <div className="reply-btn">
                                                        <button type="button"><i className="las la-reply-all"></i> Reply</button>
                                                    </div>
                                                </div>
                                                <div className="comment-desc">
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laborum quas placeat perspiciatis est, nisi expedita consectetur sit minus illum laudantium nostrum dolore odit asperiores quisquam ad enim iusto laborum quas placeat perspiciatis saepe.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <CommentForm /> 
                                    <div className="sec-title p-5 text-black-50 ">
                                <h1 className='text-center' >Commentaires ...</h1>
                                <button onClick={formSubmit}>SEND COMMENT</button>  
                            </div>*/}
                                </div>
                            </Col>
                            <Col lg="3" md="4" sm="5">
                                <BlogSidebar />
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* Footer 2 */}
                <FooterTwo />

            </div>
        </Styles>
    );
}

export default BlogDetails;
