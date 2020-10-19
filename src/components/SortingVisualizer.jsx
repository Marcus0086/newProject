import React, { Component } from "react";
import "./SortingVisualizer.css";
import { getMergeSortAnimations } from '../Algorithms/newmergesort';
import { getBubbleSortAnimations } from '../Algorithms/bubbleSort';
import { getInsertionSortAnimations } from '../Algorithms/insertionSort';
import { Button } from "react-bootstrap";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '../Algorithmstxt/mergesort.txt';

let ANIMATION_SPEED_MS = 10;
const PRIMARY_COLOR = '#14CADB';
const SECONDARY_COLOR = '#FF2200';

class Sorting extends Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
            key: 0,
            speed:0,
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
        for (let i = 0; i < 140; i++) {
            array.push(randomIntFromFunction(50, 400));
        }
        this.setState({ array: array });
    }

    bubbleSort() {
        if (this.isSorted(this.state.array)) {
            confirmAlert({
                title: "Already Sorted!",
                message: "Want to reset?",
                buttons: [
                    {
                        label: 'Yes',
                        onClick: () => {
                            window.location.reload();
                        }
                    },
                    {
                        label: 'No',
                    }
                ]
            });
            return;
        }
        const animations = getBubbleSortAnimations(this.state.array);
        let anim = 0;
        for (let i = 0; i < animations.length; ++i) {
            anim = i * ANIMATION_SPEED_MS;
            const [[], [idx]] = animations[i];// eslint-disable-line no-empty-pattern
            const arrayBars = document.getElementsByClassName("array-bar");
            if (idx === 1) {
                const [[barOneIdx, barTwoIdx], []] = animations[i];// eslint-disable-line no-empty-pattern
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = SECONDARY_COLOR;
                    barTwoStyle.backgroundColor = SECONDARY_COLOR;
                }, i * ANIMATION_SPEED_MS);
                continue;
            }
            if (idx === 2) {
                const [[barOneIdx, barTwoIdx], []] = animations[i];// eslint-disable-line no-empty-pattern
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = PRIMARY_COLOR;
                    barTwoStyle.backgroundColor = PRIMARY_COLOR;
                }, i * ANIMATION_SPEED_MS);
                continue;
            }
            if (idx === 3) {
                const [[[barOneIdx, oneHeight], [barTwoIdx, twoHeight]], []] = animations[i];// eslint-disable-line no-empty-pattern
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    barOneStyle.height = `${oneHeight}px`;
                    barTwoStyle.height = `${twoHeight}px`;
                }, i * (ANIMATION_SPEED_MS));
                continue;
            }
            if (idx === 4) {
                const [[barOneIdx], []] = animations[i];// eslint-disable-line no-empty-pattern
                const barOneStyle = arrayBars[barOneIdx].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = PRIMARY_COLOR;
                }, i * ANIMATION_SPEED_MS);
            }
        }

        if (this.isSorted(this.state.array)) {
            setTimeout(function () {
                confirmAlert({
                    title: 'Sorting Done',
                    message: 'Want to reset array?',
                    buttons: [
                        {
                            label: 'Yes',
                            onClick: () => {
                                window.location.reload();
                            }
                        },
                        {
                            label: 'No',
                        }
                    ]
                });
            }, anim);
        }
    }

    insertionSort() {
        if (this.isSorted(this.state.array)) {
            confirmAlert({
                title: "Already Sorted!",
                message: "Want to reset?",
                buttons: [
                    {
                        label: 'Yes',
                        onClick: () => {
                            window.location.reload();
                        }
                    },
                    {
                        label: 'No',
                    }
                ]
            });
            return;
        }

        const animations = getInsertionSortAnimations(this.state.array);
        let anim = 0;
        for (let i = 0; i < animations.length; i++) {
            anim = i * ANIMATION_SPEED_MS;
            const [[], [idx]] = animations[i];// eslint-disable-line no-empty-pattern
            const arrayBars = document.getElementsByClassName("array-bar");
            if (idx === 1) {
                const [[barOneIdx, barTwoIdx], []] = animations[i];// eslint-disable-line no-empty-pattern
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = SECONDARY_COLOR;
                    barTwoStyle.backgroundColor = SECONDARY_COLOR;
                }, i * ANIMATION_SPEED_MS);
            }
            if (idx === 2) {
                const [[barOneIdx, barTwoIdx], []] = animations[i];// eslint-disable-line no-empty-pattern
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = PRIMARY_COLOR;
                    barTwoStyle.backgroundColor = PRIMARY_COLOR;
                }, i * ANIMATION_SPEED_MS);
            }
            if (idx === 3) {
                const [[barOneIdx, newHeight], []] = animations[i];// eslint-disable-line no-empty-pattern
                const barOneStyle = arrayBars[barOneIdx].style;
                setTimeout(() => {
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }

        if (this.isSorted(this.state.array)) {
            setTimeout(function () {
                confirmAlert({
                    title: 'Sorting Done',
                    message: 'Want to reset array?',
                    buttons: [
                        {
                            label: 'Yes',
                            onClick: () => {
                                window.location.reload();
                            }
                        },
                        {
                            label: 'No',
                        }
                    ]
                });
            }, anim);
        }
    }


    mergeSort() {
        if (this.isSorted(this.state.array)) {
            confirmAlert({
                title: "Already Sorted!",
                message: "Want to reset?",
                buttons: [
                    {
                        label: 'Yes',
                        onClick: () => {
                            window.location.reload();
                        }
                    },
                    {
                        label:'No',
                    }
                ]
            });
            return;
        }
        const animations = getMergeSortAnimations(this.state.array);
        let anim = 0;
        for (let i = 0; i < animations.length; i++) {
            anim = i * ANIMATION_SPEED_MS;
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

        if (this.isSorted(this.state.array)) {
            setTimeout(function () {
                confirmAlert({
                    title: 'Sorting Done',
                    message: 'Want to reset array?',
                    buttons: [
                        {
                            label: 'Yes',
                            onClick: () => {
                                window.location.reload();
                            }
                        },
                        {
                            label: 'No',
                        }
                    ]
                });
            }, anim);
        }
    }

    randMerge() {
        let val = randomIntFromFunction(1, 3);
        let mp = new Map();
        mp[1] = "Merge Sort";
        mp[2] = "Bubble Sort";
        mp[3] = "Insertion Sort";
        let name = mp[val];
        if (mp[val] === "Merge Sort" || mp[val] === "Bubble Sort" || mp[val] === "Insertion Sort") {
            if (mp[val] === "Merge Sort") {
                document.getElementById("name").innerHTML = name;
                return this.mergeSort();
            } else if (mp[val] === "Bubble Sort") {
                document.getElementById("name").innerHTML = name;
                return this.bubbleSort();
            } else if (mp[val] === "Insertion Sort") {
                document.getElementById("name").innerHTML = name;
                return this.insertionSort();
            }
        }

    }

    isSorted(array) {
        if (JSON.stringify(array) === JSON.stringify(array.slice().sort((a, b) => a - b))) {
            return true;
        }
        return false;
    }

    getRange() {
        ANIMATION_SPEED_MS = document.getElementById("speed").value;
        let speed = "Speed:"+ANIMATION_SPEED_MS.toString() + "ms";
        document.getElementById("animSpeed").innerHTML = speed;
    }

    render() {
        const { array } = this.state;
        return (
            <React.Fragment>
                <div className="boxMain">
                    <div style={{
                        margin: `${1}%`,
                    }}>
                        <label htmlFor="animationSpeed" style={{
                            fontSize:'1vw',
                        }}>Animation Speed:</label><br />
                        <p style={{
                            fontSize:'0.8vw',
                        }} id="animSpeed">Default: {ANIMATION_SPEED_MS}ms</p>
                        <input type="range" id="speed" name="animationSpeed" min="5" max="20" step="5" onInput={() => this.getRange()} style={{
                            width: `${10}%`,
                            height:`${10}%`,
                        }} /><br />
                    </div>
                    <Button className="d-inline-block array-container" onClick={() => this.randMerge()} variant="secondary">
                        <h1 id="name" style={{
                            position: "relative",
                            fontSize: '3vw',
                            color: "gray",
                        }}>Visualizations</h1>
                        {array.map((value, idx) => (
                            <div
                                className="array-bar"
                                key={idx}
                                style={{
                                    height: `${value}px`
                                }}
                            />
                        ))}
                    </Button>
                    <div className="d-inline-block array-container2" variant="secondary">
                        <h1 style={{
                            fontSize: '3vw',
                            color: "gray",
                            marginLeft:'25%'
                        }}>Algorithms</h1>
                        <div style={{
                            margin: '5%',
                        }}>
                            <CKEditor
                                editor={ClassicEditor}
                                disabled={false} /></div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

function randomIntFromFunction(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


export default Sorting;