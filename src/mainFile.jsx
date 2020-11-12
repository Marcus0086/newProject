import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import FooterPage from './components/footerPage';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import './mainFile.css';
import logo from './components/images/Full-Logo.png';
class MainFile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'AdditcoX',
            headerlinks: [
                { title: 'Home', path: '/' },
                { title: 'About', path: '/about' },
                { title: 'Contact', path: '/contact' },
            ],
            home: {
                title: 'DataStructures and algorithms',
                subTitle: 'Visualizers and Animations',
                text: 'By AdditcoX'
            },
            about: {
                title: 'About us'
            },
            contact: {
                title: 'Let\'s Talk',
            }
        }
    }

    render() {
        return (
            <React.Fragment>
                <HashRouter>
                    <Container className="p-0" fluid={true}>

                        <Navbar className="navClass border-bottom" bg="dark" variant="dark" expand="lg">

                            <NavHashLink className="nav-link" to="/#about" scroll={el => el.scrollIntoView({ behavior: 'smooth' })} ><img alt={this.state.title} src={logo} style={{
                                width: `${15}%`,
                            }} /></NavHashLink>
                            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
                            <Navbar.Collapse id="navbar-toggle">
                                <Nav className="ml-auto">
                                    <NavHashLink className="nav-link" to="/#" scroll={el => el.scrollIntoView({ behavior: 'smooth' })}>Home</NavHashLink>
                                    <NavHashLink className="nav-link" to="/#about" scroll={el => el.scrollIntoView({ behavior: 'smooth' })} >About</NavHashLink>
                                    <NavHashLink className="nav-link" to="/#contact" scroll={el => el.scrollIntoView({ behavior: 'smooth' })}>Contact</NavHashLink>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Container>
                    <div id="">
                        <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />
                        <hr style={{
                            visibility: 'hidden',
                        }} />
                    </div>

                    <div id="about">
                        <AboutPage title={this.state.about.title} />
                        <hr style={{
                            visibility: 'hidden',
                        }} />
                    </div>

                    <div id="contact">
                        <ContactPage title={this.state.contact.title} />
                        <hr />
                    </div>
                </HashRouter>

                <FooterPage />
			</React.Fragment>
        );
    }
}

export default MainFile;