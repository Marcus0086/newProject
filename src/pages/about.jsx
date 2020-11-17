import React from 'react';
import HeroPage from '../components/hero';
import ContentPage from '../components/content.jsx';
import './about.css';

const AboutPage = (props) => {

    return (
        <div>
            <HeroPage title={props.title} />
            <ContentPage>
                <div className="container">
                    <div className="box" id="box_1">
                        <div className="front">
                            <div className="profile_photo p1"></div>
                            <h2 id="h" className="full_name">Raghav Gupta</h2>
                            <div className="jop">CEO & Co-Founder</div>
                            <ul className="social">
                                <li><a href="https://www.instagram.com/raghav0gupta/"><i className="fab fa-instagram"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/marcus-gupta-4a63341b5/"><i className="fab fa-linkedin"></i></a></li>
                                <li><a href="https://github.com/Marcus0086"><i className="fab fa-github"></i></a></li>
                            </ul>
                        </div>
                        <div className="back">
                            <h2>Raghav Gupta</h2>
                            <p className="info">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Cras rhoncus eget tellus fringilla egestas. Morbi ornare
                                vel augue in maximus. Quisque eget semper sem. Aenean vel
                                tempor leo. Donec ullamcorper tincidunt consectetur. Integer
                                scelerisque fermentum accumsan.
                            </p>
                        </div>
                    </div>
                    <div className="box" id="box_5">
                        <div className="front">
                            <div className="profile_photo p2"></div>
                            <h2 id="h" className="full_name">Priyanshu Gupta</h2>
                            <div className="jop">Co-Founder</div>
                            <ul className="social">
                                <li><a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a></li>
                                <li><a href="https://www.linkedin.com"><i className="fab fa-linkedin"></i></a></li>
                                <li><a href="https://github.com/Marcus0086"><i className="fab fa-github"></i></a></li>
                            </ul>
                        </div>
                        <div className="back">
                            <h2>Raghav Gupta</h2>
                            <p className="info">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Cras rhoncus eget tellus fringilla egestas. Morbi ornare
                                vel augue in maximus. Quisque eget semper sem. Aenean vel
                                tempor leo. Donec ullamcorper tincidunt consectetur. Integer
                                scelerisque fermentum accumsan.
                            </p>
                        </div>
                    </div>

                    <div className="box" id="box_3">
                        <div className="front">
                            <div className="profile_photo p3"></div>
                            <h2 id="h" className="full_name">Vikas Singh</h2>
                            <div className="jop">Co-Founder</div>
                            <ul className="social">
                                <li><a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a></li>
                                <li><a href="https://www.linkedin.com"><i className="fab fa-linkedin"></i></a></li>
                                <li><a href="https://github.com/Marcus0086"><i className="fab fa-github"></i></a></li>
                            </ul>
                        </div>
                        <div className="back">
                            <h2>Raghav Gupta</h2>
                            <p className="info">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Cras rhoncus eget tellus fringilla egestas. Morbi ornare
                                vel augue in maximus. Quisque eget semper sem. Aenean vel
                                tempor leo. Donec ullamcorper tincidunt consectetur. Integer
                                scelerisque fermentum accumsan.
                            </p>
                        </div>
                    </div>
                </div>
            </ContentPage>
        </div>
    );
}
export default AboutPage;