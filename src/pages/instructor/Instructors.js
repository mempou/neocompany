import React, { useState, useEffect } from 'react';
import Datas from '../../data/instructor/instructor.json';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import Pagination from './../../components/Pagination';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/instructor.js';
import Footer from '../../components/Footer.js';
import axios from 'axios';



const Instructor= () =>  {
    const [comments, setComments ] = useState({})
    const [response, setResponse] = useState(null);
    const [ loading, setLoading ] = useState(false)
    const [error, setError] = useState(null);

    // useEffect(() => {
    //     fetch("https://localhost:3000/index.php/wp-json/wp/v2/posts")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log('data', data);
    //             setComments(data);
    //         })
    //         .catch((error) => console.error('Error fetching data:', error));
    // }, []);

    // const formSubmit = async (e) => {
    //     const data = {
    //     username: 'dylane',
    //     password: '123456789'
    // };

    // try {
    //     console.log('form data', data)
    //     setLoading(true)
    //     const response = await axios.post('https://localhost:3000/index.php/wp-json/api/v1/token ', data);
    //     setLoading(false)
    //     console.log('comments data response', response)
    //     setResponse(response.data);
       
        
    //     setError(null);
    // } catch (error) {
    //     setLoading(false);
    //     setResponse(null);
    //     setError('Error submitting form');
    // }
    // }
    

        return (
            <Styles>
                {/* Main Wrapper */}
                <div className="main-wrapper instructor-page">

                    {/* Header 2 
                    <HeaderTwo />*/}

                    {/* Breadcroumb */}
                    <BreadcrumbBox title="Etudiants" />

                    {/* Instructor Area */}
                    <section className="instructor-area">
                        
                        <Container>
                            <h3 className='text-center' >quelques uns des etudiants des anciens etudiants</h3>
                             
                                                
                            <Row>
                                {
                                    Datas.map((data, i) => (
                                        <Col lg="4" md="4" sm="6" key={i}>
                                            <div className="instructor-item">
                                                <Link to={"/"}><img src={`/assets/images/${data?.personImage}`} alt="" className="img-fluid" /></Link>
                                                <div className="img-content text-center">
                                                    {/* <h5><Link to={"/instructor-details"}>{data.personName}</Link></h5> */}
                                                    <h5><Link to={`/product-details/${data?.id} `}>{data?.personName}</Link></h5>
                                                    <p>{data?.niveau}</p> 
                                                    
                                                    <ul className="list-unstyled list-inline">
                                                        <li className="list-inline-item"><a href={"https://web.facebook.com/agenceneocompany/?_rdc=1&_rdr"} target='_blank' rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                                                        <li className="list-inline-item"><a href={"https://www.linkedin.com/company/neocompany237/"} target='_blank' rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                                                        {/* <li className="list-inline-item"><a href={data.socialLinks.youtube}><i className="fab fa-youtube"></i></a></li> */}
                                                    </ul>
                                                </div>
                                            </div>
                                        </Col>
                                    ))
                                }

                                {/* <Col md="12" className="text-center">
                                    <Pagination />
                                </Col> */}
                            </Row>
                        </Container>
                    </section>

                    {/* Footer 2 */}
                     <FooterTwo /> 
                    {/*<Footer />*/}

                </div>
            </Styles>
        )
    
}

export default Instructor

// {
//     "idt": "2",
//     "personImaget": "Logo-Default.png",
//         "personNamet": "Rolixte Metuno",
//         "personTitlet": "Directrice Marketing et Communication",
//     "socialLinks": {
//         "facebookt": "//www.facebook.com",
//         "twittert": "//www.twitter.com",
//         "linkedint": "//www.linkedin.com",
//         "youtubet": "//www.youtube.com"
//     }
// },