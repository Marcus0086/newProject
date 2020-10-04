import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './mainFile.css';
//import Footer from './components/footer';
import Sorting from './components/SortingVisualizer';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
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
                subTitle: 'Play around',
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
                        <Link className="nav-link" to="/about"><img alt={this.state.title} /></Link>
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
                <Route path="/" exact render={() => <Sorting />} />
                <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} />} />
                <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title} />} />
            </Router>
			</React.Fragment>
        );
    }
}

export default MainFile;