import React, { Component } from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { Styles } from "./styles/tabBox.js";

class TabBox extends Component {

    render() {
        return (
            <Styles>
                {/* Tab Box Area */}
                <section className="tab-section">
                    <Container>
                        <Tab.Container defaultActiveKey="why">
                            <Row>
                                <Col lg="3" md="4">
                                    <Nav className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link eventKey="why"><i className="las la-arrow-right"></i> Pourquoi choisir Neocompany ?</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="mission"><i className="las la-arrow-right"></i> Nos Missions</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="vision"><i className="las la-arrow-right"></i> Notre Vision</Nav.Link>
                                        </Nav.Item>
                                        {/* <Nav.Item>
                                            <Nav.Link eventKey="ranking"><i className="las la-arrow-right"></i> Our Ranking</Nav.Link>
                                        </Nav.Item> */}
                                        <Nav.Item>
                                            <Nav.Link eventKey="research"><i className="las la-arrow-right"></i> Historiques</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col lg="9" md="8">
                                    <Tab.Content>
                                        <Tab.Pane eventKey="why">
                                            <h4 className="tab-title">Pourquoi choisir Neocompany ?</h4>
                                            <p className="tab-desc">Chez NeoCompany, nous nous engageons à transformer vos rêves d'études et de voyages d'affaires en réalité.</p>
                                            
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="mission">
                                            <h4 className="tab-title">Nos Missions</h4>
                                            <p className="tab-desc">Faciliter les voyages d'études : Nous vous aidons à trouver les meilleures écoles et universités à l'étranger, en vous accompagnant dans toutes les démarches administratives.
                                            </p>
                                            <ul className="list-unstyled check-list">
                                                <li><i className="fa fa-check"></i>Offrir des espaces de coworking inspirants : Nos espaces de coworking sont équipés pour favoriser la créativité, la collaboration et la productivité.
                                                </li>
                                                <li><i className="fa fa-check"></i>Organiser des voyages d'affaires : Nous planifions des voyages d'affaires sur mesure, en prenant en compte vos besoins professionnels et personnels.
                                                </li>
                                                <li><i className="fa fa-check"></i>Proposer des formations de qualité : Nos cours de langues et formations professionnelles sont conçus pour améliorer vos compétences et vous préparer à un avenir brillant.
                                                </li>
                                            </ul>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="vision">
                                            <h4 className="tab-title">Notre Vision</h4>
                                            <p className="tab-desc">Notre vision chez NeoCompany est de repousser les limites de ce qui est possible.</p>
                                            <ul className="list-unstyled check-list">
                                                <li><i className="fa fa-check"></i>Nous croyons fermement en l'importance de l'éducation de qualité et des échanges culturels pour construire un avenir meilleur.</li>
                                                <li><i className="fa fa-check"></i>Nous visons à devenir le leader en matière de voyages d'études, de voyages d'affaires, de formations et de coworking en Afrique, en offrant des services innovants et adaptés aux besoins de nos clients.
                                                </li>
                                               
                                            </ul>
                                        </Tab.Pane>
                                        {/* <Tab.Pane eventKey="ranking">
                                            <h4 className="tab-title">Our Ranking</h4>
                                            <p className="tab-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere a nisi fuga rem quas molestias, eveniet minima molestiae. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, recusandae? Assumenda, error. Quam dicta iusto saepe. Odit minus voluptas, fuga ipsum quia debitis totam, tempore laudantium quasi dicta dolorem deleniti.</p>
                                            <ul className="list-unstyled check-list">
                                                <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere.</li>
                                                <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere.</li>
                                                <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere.</li>
                                            </ul>
                                        </Tab.Pane> */}
                                        <Tab.Pane eventKey="research">
                                            <h4 className="tab-title"> Historiques</h4>
                                            <p className="tab-desc">Les débuts : NeoCompany a été créée avec la vision de faciliter l'accès à l'éducation internationale pour les étudiants africains.
                                            </p>
                                            <ul className="list-unstyled check-list">
                                                <li><i className="fa fa-check"></i>Expansion : Au fil des ans, nous avons élargi notre gamme de services pour inclure les voyages d'affaires et les formations de langue, répondant ainsi à une demande croissante.
                                                </li>
                                                <li><i className="fa fa-check"></i>Innovation : Toujours à la pointe de l'innovation, nous avons lancé nos espaces de coworking pour offrir des environnements de travail stimulants et collaboratifs.
                                                </li>
                                                <li><i className="fa fa-check"></i>Aujourd'hui : NeoCompany continue de croître et d'innover, toujours guidée par notre mission de faciliter les études, les voyages et le développement professionnel de nos clients.</li>
                                            </ul>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Container>
                </section>
            </Styles>
        )
    }
}

export default TabBox
