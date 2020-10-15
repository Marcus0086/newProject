import React from 'react';
import Sorting from '../components/SortingVisualizer';
import HeroPage from '../components/hero';
function HomePage(props) {
    return (
        <React.Fragment>
            <HeroPage className="back" title={props.title} subTitle={props.subTitle} text={props.text} />
            <Sorting />
        </React.Fragment>
    );
}

export default HomePage;