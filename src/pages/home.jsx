import React from 'react';
import HeroPage from '../components/hero';
import Sorting from '../components/SortingVisualizer';
function HomePage(props) {
    return (
        <React.Fragment>
            <HeroPage title={props.title} subTitle={props.subTitle} />
        </React.Fragment>
    );
}

export default HomePage;