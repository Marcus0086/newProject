import React, { Component } from "react";
import "./SortingVisualizer.css";
import { getMergeSortAnimations } from '../Algorithms/sortingAlgos/newmergesort';
import { getBubbleSortAnimations } from '../Algorithms/sortingAlgos/bubbleSort';
import { getInsertionSortAnimations } from '../Algorithms/sortingAlgos/insertionSort';
import { getSelectionSortAnimations } from '../Algorithms/sortingAlgos/selectionSort';
import { getQuickSortAnimations } from '../Algorithms/sortingAlgos/quickSort';
import { getBinarySearchAnimations } from '../Algorithms/searchingAlgos/binarysearch';
import { getLinearSearchAnimations } from '../Algorithms/searchingAlgos/linearSearch';
import { Button } from "react-bootstrap";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '../Algorithmstxt/mergesort.txt';

let ANIMATION_SPEED_MS = 50;
const PRIMARY_COLOR = '#14CADB';
const SECONDARY_COLOR = '#FF2200';
let anim = 0;
class Sorting extends Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
            key: 0,
            speed: 0,
            disabled: false,
        };
    }

    componentDidMount() {
        this.resetArray();
        window.onload = setTimeout(function () { this.randAlgo() }.bind(this), 10);
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < 70; i++) {
            let x = randomIntFromFunction(50, 400);
            let y = (x / 20);
            array.push(y);
        }
        this.setState({ array: array });
    }

    bubbleSort() {
        let disabled = false;
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
                    barOneStyle.height = `${oneHeight}vw`;
                    barTwoStyle.height = `${twoHeight}vw`;
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
        console.log(anim);
        setTimeout(function () { this.setState({ disabled: disabled }) }.bind(this), anim);
        //this.getAnimSpeed(anim);
    }

    insertionSort() {
        let disabled = false;
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
                const [[barOneIdx, newHeight], []] = animations[i];// eslint-disable-line no-empty-pattern
                const barOneStyle = arrayBars[barOneIdx].style;
                setTimeout(() => {
                    barOneStyle.height = `${newHeight}vw`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
        console.log(anim);
        setTimeout(function () { this.setState({ disabled: disabled }) }.bind(this), anim);
    }

    selectionSort() {
        let disabled = false;
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
        const animations = getSelectionSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            anim = i * ANIMATION_SPEED_MS;
            const [[], [idx]] = animations[i];// eslint-disable-line no-empty-pattern
            const arrayBars = document.getElementsByClassName('array-bar');
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
                    barOneStyle.height = `${oneHeight}vw`;
                    barTwoStyle.height = `${twoHeight}vw`;
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
        setTimeout(function () { this.setState({ disabled: disabled }) }.bind(this), anim);
    }

    mergeSort() {
        let disabled = false;
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
                    barOneStyle.height = `${newHeight}vw`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
        setTimeout(function () { this.setState({ disabled: disabled }) }.bind(this), anim);
    }

    quickSort() {
        let disabled = false;
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
        const animations = getQuickSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; ++i) {
            anim = i * ANIMATION_SPEED_MS;
            const [[], [idx]] = animations[i];// eslint-disable-line no-empty-pattern
            const arrayBars = document.getElementsByClassName('array-bar');
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
                    barOneStyle.height = `${oneHeight}vw`;
                    barTwoStyle.height = `${twoHeight}vw`;
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
        setTimeout(function () { this.setState({ disabled: disabled }) }.bind(this), anim);

    }

    binarySearch() {
        let disabled = false;
        ANIMATION_SPEED_MS = 500;
        const HIGH_COLOR = "tomato";
        const LOW_COLOR = "yellow";
        const MID_COLOR = "purple";
        const KEY_COLOR = "#DAAD86";
        let keyFound = false;
        document.getElementById("h3").innerHTML = "Low Color:" + LOW_COLOR + ", High Color:" + HIGH_COLOR + ", Mid Color:" + MID_COLOR + ", Key Color:" + KEY_COLOR;
        document.getElementById("keyF").innerHTML = "Key found:" + keyFound;
        const array = this.state.array.sort((a, b) => (a - b));
        this.setState({ array: array });
        const key = Math.floor(Math.random() * this.state.array.length);
        const animations = getBinarySearchAnimations(this.state.array, this.state.array[key]);
        for (let i = 0; i < animations.length; i++) {
            anim = i * ANIMATION_SPEED_MS;
            const [[], [idx]] = animations[i];// eslint-disable-line no-empty-pattern
            const arraybars = document.getElementsByClassName('array-bar');
            if (idx === 3) {
                const [[barOneIdx, barTwoIdx], []] = animations[i];// eslint-disable-line no-empty-pattern
                const barOneStyle = arraybars[barOneIdx].style;
                const barTwoStyle = arraybars[barTwoIdx].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = LOW_COLOR;
                    barTwoStyle.backgroundColor = HIGH_COLOR;
                }, i * ANIMATION_SPEED_MS);
            }

            if (idx === 11) {
                const [[barOneIdx, barTwoIdx], []] = animations[i];// eslint-disable-line no-empty-pattern
                const barOneStyle = arraybars[barOneIdx].style;
                const barTwoStyle = arraybars[barTwoIdx].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = PRIMARY_COLOR;
                    barTwoStyle.backgroundColor = PRIMARY_COLOR;
                }, i * ANIMATION_SPEED_MS);
            }

            if (idx === 4) {
                const [[barOneIdx], []] = animations[i];// eslint-disable-line no-empty-pattern
                const barOnseStyle = arraybars[barOneIdx].style;
                setTimeout(() => {
                    barOnseStyle.backgroundColor = MID_COLOR;
                }, i * ANIMATION_SPEED_MS);
            }

            if (idx === 5) {
                const [[barOneIdx], []] = animations[i];// eslint-disable-line no-empty-pattern
                const barOnseStyle = arraybars[barOneIdx].style;
                setTimeout(() => {
                    barOnseStyle.backgroundColor = PRIMARY_COLOR;
                }, i * ANIMATION_SPEED_MS);
            }

            if (idx === 6) {
                const [[barOneIdx], []] = animations[i];// eslint-disable-line no-empty-pattern
                const barOnseStyle = arraybars[barOneIdx].style;
                setTimeout(() => {
                    barOnseStyle.backgroundColor = HIGH_COLOR;
                }, i * ANIMATION_SPEED_MS);
            }

            if (idx === 7) {
                const [[barOneIdx], []] = animations[i];// eslint-disable-line no-empty-pattern
                const barOnseStyle = arraybars[barOneIdx].style;
                setTimeout(() => {
                    barOnseStyle.backgroundColor = PRIMARY_COLOR;
                }, i * ANIMATION_SPEED_MS);
            }

            if (idx === 8) {
                const [[barOneIdx], []] = animations[i];// eslint-disable-line no-empty-pattern
                const barOnseStyle = arraybars[barOneIdx].style;
                setTimeout(() => {
                    barOnseStyle.backgroundColor = LOW_COLOR;
                }, i * ANIMATION_SPEED_MS);
            }

            if (idx === 9) {
                const [[barOneIdx], []] = animations[i];// eslint-disable-line no-empty-pattern
                const barOnseStyle = arraybars[barOneIdx].style;
                setTimeout(() => {
                    barOnseStyle.backgroundColor = PRIMARY_COLOR;
                }, i * ANIMATION_SPEED_MS);
            }

            if (idx === 10) {
                keyFound = true;
                const keyF = keyFound;
                const [[barOneIdx], []] = animations[i];// eslint-disable-line no-empty-pattern
                const barOnseStyle = arraybars[barOneIdx].style;
                setTimeout(() => {
                    barOnseStyle.backgroundColor = KEY_COLOR;
                    document.getElementById("keyF").innerHTML = "Key found:" + keyF;
                }, i * ANIMATION_SPEED_MS);
            }
        }
        setTimeout(function () { this.setState({ disabled: disabled }) }.bind(this), anim);
    }

    linearSearch() {
        let keyFound = false;
        let disabled = false;
        ANIMATION_SPEED_MS = 200;
        const KEY_COLOR = "#DAAD86";
        const key = Math.floor(Math.random() * this.state.array.length);
        document.getElementById("h3").innerHTML = "Key Color:" + KEY_COLOR;
        const animations = getLinearSearchAnimations(this.state.array, this.state.array[key]);
        document.getElementById("keyF").innerHTML = "Key found:" + keyFound;
        for (let i = 0; i < animations.length; i++) {
            anim = i * ANIMATION_SPEED_MS;
            const [[], [idx]] = animations[i];// eslint-disable-line no-empty-pattern
            const arrayBars = document.getElementsByClassName('array-bar');
            if (idx === 1) {
                const [[barOneIdx], []] = animations[i];// eslint-disable-line no-empty-pattern
                const barOneStyle = arrayBars[barOneIdx].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = SECONDARY_COLOR;
                }, i * ANIMATION_SPEED_MS);
            }

            if (idx === 2) {
                const [[barOneIdx], []] = animations[i];// eslint-disable-line no-empty-pattern
                const barOneStyle = arrayBars[barOneIdx].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = PRIMARY_COLOR;
                }, i * ANIMATION_SPEED_MS);
            }

            if (idx === 3) {
                keyFound = true;
                let keyF = keyFound;
                const [[barOneIdx], []] = animations[i];// eslint-disable-line no-empty-pattern
                const barOneStyle = arrayBars[barOneIdx].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = KEY_COLOR;
                    document.getElementById("keyF").innerHTML = "Key found:" + keyF;
                }, i * ANIMATION_SPEED_MS);
                break;
            }
        }
        setTimeout(function () { this.setState({ disabled: disabled }) }.bind(this), anim);
    }

    getAnimSpeed(anim) {
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
    randAlgo() {
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
        let mp = ["Merge Sort", "Bubble Sort", "Insertion Sort", "Quick Sort", "Selection Sort", "Binary Search", "Linear Search"];
        let val = randomIntFromFunction(0, 6);
        mp = mp.sort(() => Math.random() - 0.5);
        let name = mp[val];
        let disabled = false;
        if (mp[val] === "Merge Sort" || mp[val] === "Bubble Sort" || mp[val] === "Insertion Sort" || mp[val] === "Quick Sort" || mp[val] === "Selection Sort" || mp[val] === "Binary Search" || mp[val] === "Linear Search" ) {
            if (mp[val] === "Merge Sort") {
                //console.log(name);
                document.getElementById("name").innerHTML = name;
                disabled = true;
                this.setState({ disabled: disabled });
                return this.mergeSort();
            } else if (mp[val] === "Bubble Sort") {
                //console.log(name);
                document.getElementById("name").innerHTML = name;
                disabled = true;
                this.setState({ disabled: disabled });
                return this.bubbleSort();
            } else if (mp[val] === "Insertion Sort") {
                //console.log(name);
                document.getElementById("name").innerHTML = name;
                disabled = true;
                this.setState({ disabled: disabled });
                return this.insertionSort();
            } else if (mp[val] === "Quick Sort") {
                //console.log(name);
                document.getElementById("name").innerHTML = name;
                disabled = true;
                this.setState({ disabled: disabled });
                return this.quickSort();
            } else if (mp[val] === "Selection Sort") {
                //console.log(name);
                document.getElementById("name").innerHTML = name;
                disabled = true;
                this.setState({ disabled: disabled });
                return this.selectionSort();
            } else if (mp[val] === "Binary Search") {
                //console.log(name);
                document.getElementById("name").innerHTML = name;
                disabled = true;
                this.setState({ disabled: disabled });
                return this.binarySearch();
            } else if (mp[val] === "Linear Search") {
                //console.log(name);
                document.getElementById("name").innerHTML = name;
                disabled = true;
                this.setState({ disabled: disabled });
                return this.linearSearch();
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
                        margin: `${0}%`,
                    }}>
                        {/*<label htmlFor="animationSpeed" style={{
                            fontSize:'1vw',
                        }}>Animation Speed:</label><br />
                        <p style={{
                            fontSize:'0.8vw',
                        }} id="animSpeed">Default: {ANIMATION_SPEED_MS}ms</p>
                        <input type="range" id="speed" name="animationSpeed" min="5" max="20" step="5" onInput={() => this.getRange()} style={{
                            width: `${10}%`,
                            height:`${10}%`,
                        }} /><br />*/}
                    </div>
                    <Button className="d-inline-block array-container" variant="" disabled={this.state.disabled}>
                        <h1 id="name" style={{
                            position: "relative",
                            fontSize: '3vw',
                            color: "tomato",
                        }}>Visualizations</h1>
                        <h3 id="h3" style={{
                            position: "relative",
                            fontSize: '0.9vw',
                            color: "tomato",
                        }} >{ }</h3>
                        <h3 id="keyF" style={{
                            position: "relative",
                            fontSize: '0.9vw',
                            color: "tomato",
                        }} >{ }</h3>
                        {array.map((value, idx) => (
                            <div
                                className="array-bar"
                                key={idx}
                                style={{
                                    height: `${value}vw`,
                                }}
                            >{ value }</div>
                            
                        ))}
                    </Button>
                    <Button className="d-inline-block array-container2" variant="" disabled={this.state.disabled}>
                        <h1 style={{
                            fontSize: '3vw',
                            color: "tomato",
                        }}>Algorithms</h1>
                        <div style={{
                            margin: '4%',
                        }}>
                            <CKEditor
                                editor={ClassicEditor}
                                disabled={false}
                            /></div>
                    </Button>
                </div>
            </React.Fragment>
        );
    }
}

function randomIntFromFunction(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default Sorting;