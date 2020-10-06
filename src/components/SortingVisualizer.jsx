import React, { Component } from "react";
import "./SortingVisualizer.css";
import MergeSort from '../Algorithms/mergesort';
import binaySearch from '../Algorithms/binarysearch';
//import { Form } from "react-bootstrap";
class Sorting extends Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
            key: 0,
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    defaultArray() {
        const array = [];
        const key = 0;
        for (let i = 0; i < 100; i++) {
            array.push(10);
        }
        this.setState({ array: array });
        this.setState({ key: key });
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < 100; i++) {
            array.push(randomIntFromFunction(50, 400));
        }
        this.setState({ array: array });
    }
    mergesortAlgo() {
        var array = [];
        const preSort = this.state.array.sort();
        array = MergeSort(this.state.array);
        console.log("Merge Sort" + array);
        console.log("Pre Sort" + preSort);
        this.setState({ array });
    }

    binarysortAlgo() {
        var array = [];
        var key = document.getElementById('x').value;
        key = parseInt(key);
        console.log(key);
        array = MergeSort(this.state.array);
        this.setState({ array: array });
        this.setState({ key: key });
        console.log(array);
        var ans = binaySearch(array, this.state.key);
        (ans === -1) ? console.log("Not found:" + this.state.key) : console.log("Found " + this.state.key + " at: " + ans);
    }
    render() {
        const { array } = this.state;
        return (
            <React.Fragment>
                <div className="array-container">
                {array.map((value, idx) => (
                <div
                className="array-bar"
                key={idx}
                style={{ 
                    height:`${value}px`
                 }}
                />
                ))}
                </div>
                <button onClick={() => this.resetArray()}>Reset</button>
                <button onClick={() => this.mergesortAlgo()}>MergeSort</button>
            </React.Fragment>
        );
    }
}

function randomIntFromFunction(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default Sorting;