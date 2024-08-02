import React, { Component } from 'react';
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import { Styles } from "./styles/breadcrumb.js";
import { Link } from 'react-router-dom';

export class BreadcrumbBox extends Component {
    state = {
        backgroundImage: 'banner1_2636x1003.jpg',
    }

    render() {
        return (
            <Styles>
                <section className="breadcrumb-area" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${this.state.backgroundImage})` }}>
                    <Container>
                        <Row>
                            <Col md="12" className="text-center">
                                <div className="breadcrumb-box">
                                    <h2 className="breadcrumb-title">{this.props.title}</h2>
                                    <Breadcrumb>
                                        <Breadcrumb.Item><Link to={'/'} >Accueil</Link> </Breadcrumb.Item>
                                        <Breadcrumb.Item active>{this.props.title}</Breadcrumb.Item>
                                    </Breadcrumb>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Styles>
        )
    }
}