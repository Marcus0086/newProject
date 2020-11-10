import React, { Component } from 'react';
class FooterPage extends Component {

    toTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }

    render() {
        return (
            <React.Fragment>
                {/*<footer className="page-footer footerColor">
			        <Container fluid={true}>
                        <Row className="border-top justify-content-between p-3">
                                <Col className="p-0" md={3} sm={12} >
                                    <dl style={{
                                        color: 'whitesmoke',
                                    }}>
                                        <dt>Members</dt>
                                        <dd><li>Raghav Gupta</li></dd>
                                        <dd><li>Vikas Singh</li></dd>
                                        <dd><li>Priyanshu Gupta</li></dd>
                                    </dl>
                                </Col>
                        </Row>
                    </Container>
                    <div className="footer-copyright text-center py-3" style={{
                        color: 'whitesmoke',
                        backgroundColor:'#212121',
                    }}>
                        &#169;Copyright 2020
                    </div>
                </footer>*/}

                <div className="footer">
                    <div className="innerfooter">
                        <h2>A<span className="i">DD</span>ITO<span className="i">X.</span></h2>
                        <div className="infoot">
                            <div className="col1">
                                <p style={{
                                    fontSize: `${12}px`,
                                    marginBottom:`${50}px`,
                                }}>
                                    Data Structures and Algorithms made simple.
                                </p>
                            </div>
                            <div className="col2">
                                <p><span className="pi">Subscribe</span> to our newsletter</p>
                                <form name="newsl">
                                    <input type="email" placeholder="Email" name="email" />
                                    <input type="submit" value="Subscribe" />
                                </form>
                            </div>

                            <div className="iconc">
                                <div className="iconc1">
                                    <a href="https://www.facebook.com"><i className="fa fa-facebook"></i></a>
                                    <a href="https://www.instagram.com"><i className="fa fa-instagram"></i></a>
                                    <a href="https://www.twitter.com"><i className="fa fa-twitter"></i></a>
                                    <a href="https://www.youtube.com"><i className="fa fa-youtube"></i></a>
                                    <a href="https://www.whatsapp.com"><i className="fa fa-whatsapp"></i></a>
                                </div>
                            </div>
                        </div>
                        <hr style={{ backgroundColor: 'white', }} />
                        <div className="iconc2">
                            <a href="https://www.gmail.com" style={{ color: 'whitesmoke', }}>guptamarcus42@gmail.com</a>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright text-center py-3" style={{
                    color: 'white',
                    backgroundColor: '#000000',
                }}>&copy;2020 Copyright:
                            <a href="https://dsalgoapp.netlify.app/"> ADDITCOX</a>
                </div>
			</React.Fragment>
        );
    }
}

export default FooterPage;