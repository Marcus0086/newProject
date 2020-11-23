import React, { Component } from 'react';

class Trees extends Component {
    constructor(props) {
        super(props);
        this.state = {
            empty: "",
        };
    }
    render = () => {
        return (
            <React.Fragment>
                <p>Hello Trees page</p>
            </React.Fragment>
            );
    }
}

export default Trees;