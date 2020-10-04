import React from 'react';
import HeroPage from '../components/hero';

function HomePage(props) {
    return (
        <React.Fragment>
            <HeroPage title={props.title} subTitle={props.subTitle} text={props.text} />
        </React.Fragment>
    );
}

export default HomePage;