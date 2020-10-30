import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
class FooterPage extends Component {
    render() {
        return (
            <React.Fragment>
			    <footer className="mt-4">
			        <Container fluid={true}>
                    <Row className="border-top justify-content-between p-3">
                            <Col className="p-0" md={3} sm={12}>
                                <dl style={{
                                    fontFamily: 'cursive',
                                }}>
                            <dt>Members</dt>
                            <dd><li>Raghav Gupta</li></dd>
                            <dd><li>Vikas Singh</li></dd>
                            <dd><li>Priyanshu Gupta</li></dd>
                        </dl>
                            </Col>
                            <Col className="pd-0 d-flex justify-content-end" md={3} style={{
                                fontFamily:'monospace'
                            }}>
                        <p>Copyright 2020-AddictoX.<br />
                        All rights reserved</p>
                    </Col>
                    </Row>
                    </Container>
                </footer>
			</React.Fragment>
        );
    }
}

export default FooterPage;