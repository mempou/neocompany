import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import { Styles } from '../styles/blog';
import axios from 'axios'



const PostCart = ({ data, i}) => {
      // Utility function to strip HTML tags
      function stripHTML(html) {
        let doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || "";
    }

    // Wrapper component to use the utility function
    const TextWrapper = ({ html }) => {
        return <>{stripHTML(html)}</>;
    }

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
    const [image, setImage] = useState({
    });

    useEffect(() => {
        const fetchImage = async () => {
            const { featured_media } = data;
            try {
                const urlImage = data?._links['wp:attachment']['0'].href;
                const response = await axios.get(urlImage);
                console.log('response', response)
                setImage(response.data['0']
                );
            } catch (error) {
                console.error('Error fetching image:', error);
            }
        };

        fetchImage();
    }, [data]);

    console.log('data._link[ ', data?._links['wp:attachment']['0'].href )
    console.log('data._link[ ', image )
    
    return (
        <Styles>
            <Col lg="6" md="12" key={data.id}>
                <div className="blog-item">
                    <div className="blog-img">
                        {/*   // )} {data._embedded && data._embedded['wp:featuredmedia'] && ( 
                            </Link> <Link to={data.link}>*/}
                               <img
                                    src={image === undefined ? '/assets/images/heroimage3.jpg' : image?.source_url }
                                    alt={data.title.rendered}
                                    className="img-fluid"
                                />
                           
                     
                    </div>
                    <div className="blog-content">
                        <div className="blog-auth_date d-flex">
                            <div className="author-img d-flex">
                                <Link to={process.env.PUBLIC_URL + data.authorLink}>
                                    <img src={process.env.PUBLIC_URL + `/assets/images/${data.authorImg}`} alt="" />
                                </Link>
                                <p>
                                    <Link to={process.env.PUBLIC_URL + data.authorLink}>
                                        {data.authorName}
                                    </Link>
                                </p>
                            </div>
                            <div className="post-date">
                                <p><i className="las la-calendar"></i> {formatDateTime(data.date)}</p>
                            </div>
                        </div>
                        <div className="blog-title">
                            <h6><Link to={process.env.PUBLIC_URL + `/blog/postDetail/${data.id}`}> <TextWrapper html={data.title?.rendered} /></Link></h6>
                        </div>
                        <div className="blog-desc">
                            <p><TextWrapper html={data.excerpt?.rendered} /></p>
                        </div>
                    </div>
                </div>
            </Col>
        </Styles>
    )
}

export default PostCart
