
import Datas from '../../data/event/events.json';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import Pagination from '../../components/Pagination';
import CourseSidebar from '../courses/components/CourseSidebar';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/event.js';
import React, {Component , useState, useEffect } from 'react';


const Events = ()=>  {
    const [filteredData, setFilteredData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const perPage = 4;

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
        fetch(`https://www.admin.neocompany.org/index.php/wp-json/wp/v2/posts?per_page=${perPage}&page=${currentPage}`)
            .then((res) => res.json())
            .then((data) => {
                const filtered = data.filter(post => post.categories.includes(9));
                console.log('filtered data', filtered);
                setFilteredData(filtered);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

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
                <div className="main-wrapper event-page">

                    {/* Header 2 
                    <HeaderTwo />*/}

                    {/* Breadcroumb */}
                    <BreadcrumbBox title="Actualites" />

                    {/* Events Area */}
                    <section className="event-page-area">
                        <Container>
                            <Row>
                                <Col lg="9" md="12">
                                    {
                                        filteredData.map((data, i) => (
                                            <div className="event-box" key={i}>
                                                <Row>
                                                    <Col xl="3" lg="4" md="0">
                                                        <div className="event-img">
                                                            <Link to={data.eventLink}><img src={`/assets/images/image2.jpg`} alt="" className="img-fluid" /></Link>
                                                        </div>
                                                    </Col>
                                                    <Col xl="9" lg="8" md="12">
                                                        <div className="event-content gap-4">
                                                            <div className="content-box gap-4">
                                                                <Row>
                                                                    <Col md="9">
                                                                        <div className="event-title">
                                                                            <h6><Link to={data.eventLink}>{<TextWrapper html={data.title.rendered} />}</Link></h6>
                                                                        </div>
                                                                        <div className="event-time-location">
                                                                            <ul className="list-unstyled list-inline">
                                                                                <li className="list-inline-item"><i className="las la-clock"></i> {formatDateTime(data.date)}</li>
                                                                                {/* <li className="list-inline-item"><i className="las la-map-marker"></i> {data.eventLocation}</li> */}
                                                                            </ul>
                                                                        </div>
                                                                        <div className="event-desc">
                                                                            <p><TextWrapper html={data?.excerpt?.rendered} /></p>
                                                                        </div>
                                                                    </Col>
                                                                    <Col md="3" className="text-center">
                                                                        <div className="event-date">
                                                                            <p>{data.eventDate}</p>
                                                                        </div>
                                                                        <div className="join-btn">
                                                                            <Link to={`/event-details/${data.id}` }>Lire la suite</Link>
                                                                        </div>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        ))
                                    }

                                    <Col md="12" className="text-center">
                                    {
                                        Object.keys(filteredData).length > 0 && (
                                            <div className='w-1/2 py-10 m-auto flex justify-between items-center align-middle flex-wrap gap-10   pagination-box list-unstyled list-inline'>
                                                <button className='active list-inline-item  btn-primary p-2 bg-blue-500 text-white text-lg rounded-lg hover:shadow-lg disabled:opacity-50'
                                                    disabled={currentPage === 1}
                                                    onClick={() => setCurrentPage(currentPage - 1)}
                                                >
                                                    <i className="las la-angle-double-left"></i>
                                                </button>

                                                <span className='text-lg active list-inline-item'>{currentPage} sur {totalPages}</span>

                                                <button className=' list-inline-item  btn-primary p-2 bg-blue-500 text-white text-lg rounded-lg hover:shadow-lg disabled:opacity-50'
                                                    disabled={currentPage === totalPages}
                                                    onClick={() => setCurrentPage(currentPage + 1)}
                                                >
                                                    <i className="las la-angle-double-right"></i>
                                                </button>
                                            </div>
                                        )
                                    }
                                        
                                    </Col>
                                </Col>

                                {/* <Col lg="3" md="0">
                                    <CourseSidebar /><Pagination />
                                </Col> */}

                            </Row>
                        </Container>
                    </section>


                    {/* Footer 2 */}
                    <FooterTwo />

                </div>
            </Styles>
        )
    }


export default Events