import {  Fragment } from 'react';
import Datas from '../../../data/course/item.json';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import Pagination from './../../../components/Pagination';
import React, {Component , useState, useEffect } from 'react';


const CourseItemList = () => {
    const [formationData, setFormationData] = useState([]);
    const [media, setMedia] = useState([]);

    const [mediaData, setMediaData] = useState(null);

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
                const filteredFormations = data.filter(post => post.categories.includes(11));
                console.log('filteredFormations', filteredFormations);

                if (filteredFormations.length > 0) {
                    const featured_media = filteredFormations[0]?.featured_media;
                    console.log('featured_media', featured_media);
                    setMedia(featured_media)
                }

                setFormationData(filteredFormations);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);
    
    useEffect(() => {
        if (media) {
            fetch(`https://www.admin.neocompany.org/index.php/wp-json/wp/v2/media/${media}`)
                .then((res) => res.json())
                .then((data) => {
                    const filteredFormationsImage = data.filter(post => post.slug.includes('formation'));
                    console.log('filteredFormationsImage', filteredFormationsImage);
                    console.log('mediaData filteredFormationsImage', filteredFormationsImage);
                    setMediaData(data);
                })
                .catch((error) => console.error('Error fetching media data:', error));
        }
    }, [media]);

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
            <Fragment>
                {/* Course Item */}
                {formationData.length === 0 ? <p className='text-center'> Loading ...</p> : 


                    formationData.map((data, i) => (
                        <Col md="12" key={i}>
                            <div className="course-item d-flex">
                                <div className="course-image-box">
                                    <div className="course-image" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/formation.jpg)` }}>
                                        <div className="author-img d-flex">
                                            {/* <div className="img">
                                                <Link to={data.courseLink}>
                                                    <img src={`/assets/images/${data.authorImg}`} alt="" />
                                                </Link>
                                            </div>
                                            <div className="title">
                                                <p>{data.authorName}</p>
                                                <span>{data.authorCourses}</span>
                                            </div> */}
                                        </div>
                                        {/* <div className="course-price">
                                            <p>{data.price}</p>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="course-content">
                                    <h6 className="heading"><Link to={`/formation/${data?.id}`}>{<TextWrapper html={data.title.rendered} />}</Link></h6>
                                   
                                    <p className="desc"><TextWrapper html={data?.excerpt?.rendered} /></p>
                                    <Link className="details-btn" to={`/formation/${data?.id}`}>Details ...</Link>
                                </div>
                            </div>
                        </Col>
                    ))
                }
                
                {/* <Col md="12"  className="text-center">
                    <Pagination />
                </Col> */}

            </Fragment>
        )
    }


export default CourseItemList
