import React from 'react';
import Sorting from '../components/SortingVisualizer';
import HeroPage from '../components/hero';
function HomePage(props) {
    return (
        <React.Fragment>
            <HeroPage title={props.title} subTitle={props.subTitle} text={props.text} />
            <div className="boxMain">
                <h1>Visualization</h1>
                <div className="box">
                    <Sorting />
                </div>
                <div className="box" />
            </div>
        </React.Fragment>
    );
}

export default HomePage;