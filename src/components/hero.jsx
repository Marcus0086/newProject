import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './hero.css';

function HeroPage(props) {
    return (
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-5 backColor">
                    <Col md={8} sm={12}>
                        {props.title && <h1 className="display-1 font-weight-bolder" style={{
                            fontSize:'6vw'
                        }}>{props.title}</h1>}
                        {props.subTitle && <h3 className="display-4 font-weight-light" style={{
                            fontSize:'2vw'
                        }}>{props.subTitle}</h3>}
                        {props.text && <h3 className="lead font-weight-light" style={{
                            fontSize:'1vw'
                        }}>{props.text}</h3>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default HeroPage;