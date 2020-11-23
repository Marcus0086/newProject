import React, { Component } from 'react';

class LinkedList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            empty:"",
        };
    }

    render() {
        return (
            <React.Fragment>
                <p>Hello Linked list page</p>
            </React.Fragment>
            );
    }
}

export default LinkedList;