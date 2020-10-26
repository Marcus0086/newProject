import React, { Component } from "react";
import "./SortingVisualizer.css";
import { getMergeSortAnimations } from '../Algorithms/newmergesort';
import { getBubbleSortAnimations } from '../Algorithms/bubbleSort';
import { getInsertionSortAnimations } from '../Algorithms/insertionSort';
import { getSelectionSortAnimations } from '../Algorithms/selectionSort';
import { getQuickSortAnimations } from '../Algorithms/quickSort';
import { Button } from "react-bootstrap";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '../Algorithmstxt/mergesort.txt';
import { clearInterval } from "timers";

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
        window.onload = setTimeout(function () { this.counter() }.bind(this), 1000);
    }

    counter() {
        let c = 3;
        setInterval(() => {
            if (c > 0) {
                document.getElementById("name").innerHTML = c--;
            }
            clearInterval();
        }, 1000);
        setTimeout(function () { this.randSort() }.bind(this), ((c * 1000) + 1000));
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < 70; i++) {
            let x = randomIntFromFunction(50, 400);
            let y = x/20;
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
        //this.getAnimSpeed(anim);
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
    randSort() {
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
        let val = randomIntFromFunction(0, 4);
        let mp = ["Merge Sort", "Bubble Sort", "Insertion Sort", "Quick Sort", "Selection Sort"];
        mp = mp.sort(() => Math.random() - 0.5);
        let name = mp[val];
        let disabled = false;
        if (mp[val] === "Merge Sort" || mp[val] === "Bubble Sort" || mp[val] === "Insertion Sort" || mp[val]==="Selection Sort") {
            if (mp[val] === "Merge Sort") {
                document.getElementById("name").innerHTML = name;
                disabled = true;
                this.setState({ disabled: disabled });
                return this.mergeSort();
            } else if (mp[val] === "Bubble Sort") {
                document.getElementById("name").innerHTML = name;
                disabled = true;
                this.setState({ disabled: disabled });
                return this.bubbleSort();
            } else if (mp[val] === "Insertion Sort") {
                document.getElementById("name").innerHTML = name;
                disabled = true;
                this.setState({ disabled: disabled });
                return this.insertionSort();
            } else if (mp[val] === "Quick Sort") {
                document.getElementById("name").innerHTML = name;
                disabled = true;
                this.setState({ disabled: disabled });
                return this.quickSort();
            }
            else {
                document.getElementById("name").innerHTML = name;
                disabled = true;
                this.setState({ disabled: disabled });
                return this.selectionSort();
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
                        {array.map((value, idx) => (
                            <div
                                className="array-bar"
                                key={idx}
                                style={{
                                    height: `${value}vw`,
                                }}
                            >{value}</div>
                            
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