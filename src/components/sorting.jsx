import React from 'react';
import { Spring } from 'react-spring/renderprops';
import './sorting.css';

class Sorting extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Spring 
                from={{ opacity:0 , marginTop:-500 }}
                to={{ opacity:1 , marginTop:0 }}
                >
                    {
                        props => (
                            <div style={props}>
                                <div style={c1s1}>
                                    <dl>
                                        <dt>
                                            <h3>Component1</h3>
                                            <dd>
                                                Lorem ipsum in cillum dolor dolor non deserunt velit tempor duis proident eu officia ad in.
                                            </dd>
                                        </dt>
                                    </dl>
                                </div>
                            </div>
                            )}
                </Spring>
            </React.Fragment>
        );
    }
}

const c1s1 = {
    color: 'white',
    background: 'steelblue',
    padding: '1.5rem'
}

export default Sorting;