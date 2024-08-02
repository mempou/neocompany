

import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import Pagination from './../../components/Pagination';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/blog.js';
import React, {Component , useState, useEffect } from 'react';
import PostCart from './components/PostCart.js';
//import { Styles } from "./styles/pagination.js";


const BlogGrid = () => {
    const [alldata, setAllData] = useState([]);
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
            .then((res) => {
                setTotalPages(Number(res.headers.get('x-wp-totalpages')));
                console.log('data lenght', res);
                return res.json();
            })
            .then((data) => {
                console.log('data', data);
                const filtered = data.filter(post => post.categories.includes(10));
                setAllData(filtered);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, [currentPage]);
   
    console.log('data lenght', totalPages);
        return (
            <Styles>
                {/* Main Wrapper */}
                <div className="main-wrapper blog-grid-page">

                    {/* Header 2 
                    <HeaderTwo />*/}

                    {/* Breadcroumb */}
                    <BreadcrumbBox title="Bienvenu sur  NEOBLOG." />

                    {/* Blog Classic */}
                    <section className="blog-grid-area">
                        <Container>
                          {alldata.length === 0 ? <p className='text-center text-md-center'>Loading ...</p> :  <Row>
                               
                                    <Col lg="9" md="8" sm="7">
                                <Row>
                                    {alldata.map((data, i) => (
                                        <div className="blog-grid-item" key={i}>

                                      
                                        <PostCart 
                                           
                                            
                                            
                                            
                                            data={data}
                                            i={i}
                                        />  </div>
                                    ))}
                                
                                </Row>

                                    <div className="text-center">
                                    {
                                        Object.keys(alldata).length > 0 && (
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
                                      
                                    </div>
                                </Col>
                                <Col lg="3" md="4" sm="5">
                                    {/* <BlogSidebar /><Pagination />  <Pagination /> */}
                                </Col>
                            </Row>}
                        </Container>
                    </section>

                    {/* Footer 2 */}
                    <FooterTwo />

                </div>
            </Styles>
        )
    };


export default BlogGrid