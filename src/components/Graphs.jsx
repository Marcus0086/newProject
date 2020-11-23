import React, { Component } from 'react';

class Graphs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            empty: "",
        };
    }

    render = () => {
        return (
            <React.Fragment>
                <p>Hello Graphs Page</p>
            </React.Fragment>
            );
    }
}

export default Graphs;