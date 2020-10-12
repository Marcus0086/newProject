import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
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
                title: 'Let\'s Talk'
            }
        }
    }

    render() {
        return (
            <React.Fragment>
            <Router>
                <Container className="p-0" fluid={true}>
                        <Navbar className="border-bottom" bg="dark" variant="dark" expand="lg">
                            <Link className="nav-link" to="/about"><img alt={this.state.title} src={ logo } style={{ width:`${20}%` }} /></Link>
                        <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
                        <Navbar.Collapse id="navbar-toggle">
                            <Nav className="ml-auto">
                                <Link className="nav-link" to="/">Home</Link>
                                <Link className="nav-link" to="/about">About</Link>
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    </Container>
                    <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
                    <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} />} />
                    <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title} />} />
                    <FooterPage />
            </Router>
			</React.Fragment>
        );
    }
}

export default MainFile;