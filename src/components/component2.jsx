import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';

class Component2 extends Component {
    render() {
        return (
            <React.Fragment>
                <Spring 
                from={{ opacity:0 }}
                to={{ opacity:1 }}
                config={{ delay:500, duration:250 }}
                >
                    {
                        props => (
                            <div style={props}>
                                <div style={c1s2}>
                                    <dl>
                                        <dt>
                                            <h3>Component1</h3>
                                            <dd>
                                                Amet minim dolor cupidatat nostrud aliqua culpa aliqua excepteur tempor id veniam cillum pariatur dolore exercitation esse id laborum proident dolor dolor in nulla labore dolor proident laborum ex esse sint pariatur duis et.
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
const c1s2 = {
    color: 'white',
    background: 'orange',
    padding: '1.5rem'
}

export default Component2;