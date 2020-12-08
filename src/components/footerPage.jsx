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
                <div className="footer">
                    <div className="innerfooter">
                        <h2>A<span className="i">DD</span>ICTO<span className="i">X.</span></h2>
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
                                    <a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
                                    <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
                                    <a href="https://www.whatsapp.com"><i className="fab fa-whatsapp"></i></a>
                                    <a href="https://github.com/Marcus0086"><i className="fab fa-github"></i></a>
                                </div>
                            </div>
                        </div>
                        <hr style={{ backgroundColor: 'white', }} />
                        <div className="iconc2">
                            <a href="https://www.gmail.com" style={{ color: 'whitesmoke', }}>EMAIL: guptamarcus42@gmail.com</a>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright text-center py-3" style={{
                    color: 'white',
                    backgroundColor: '#000000',
                }}>
                    &copy;2020 For community By:
                    <a href="https://dsalgoapp.netlify.app/"> ADDITCOX</a>
                </div>
			</React.Fragment>
        );
    }
}

export default FooterPage;