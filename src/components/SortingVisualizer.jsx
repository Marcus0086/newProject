import React, { Component } from "react";
import "./SortingVisualizer.css";
import MergeSort from '../Algorithms/mergesort';
import { getMergeSortAnimations } from '../Algorithms/newmergesort';
import binaySearch from '../Algorithms/binarysearch';
//import { Form } from "react-bootstrap";

const ANIMATION_SPEED_MS = 5;
const PRIMARY_COLOR = '#14CADB';
const SECONDARY_COLOR = 'red';
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
        for (let i = 0; i < 300; i++) {
            array.push(randomIntFromFunction(50, 400));
        }
        this.setState({ array: array });

        window.addEventListener('load', this.mergeSort());
    }
    /*mergesortAlgo() {
        var array = [];
        const preSort = this.state.array.slice().sort((a, b) => a - b);
        array = MergeSort(this.state.array);
        console.log("Merge Sort" + array);
        console.log("Pre Sort" + preSort);
        this.setState({ array });
        (array.length === preSort.length) ? console.log(true) : console.log(false);
    }*/

    mergeSort() {
        const animations = getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }
    testAlgos() {
        for (let i = 0; i < 1000; i++) {
            const arr = [],
                length = randomIntFromFunction(1, 1000);
            for (let j = 0; j < length; j++) {
                arr.push(randomIntFromFunction(1, 1000));
            }
            const sortedArray = MergeSort(arr);
            const presort = arr.slice().sort((a, b) => a - b);
            //console.log(sortedArray);
            //console.log(presort);
            (sortedArray.length === presort.length) ? console.log(true) : console.log(false);
            //console.log(sortedArray[5]);
            //console.log(presort[5]);
        }
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
                <button onClick={() => this.mergeSort()}>MergeSort</button>
                <button onClick={() => this.testAlgos()}>test</button>
            </React.Fragment>
        );
    }
}

function randomIntFromFunction(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default Sorting;