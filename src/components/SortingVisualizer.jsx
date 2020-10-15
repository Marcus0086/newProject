import React, { Component } from "react";
import "./SortingVisualizer.css";
import { getMergeSortAnimations } from '../Algorithms/newmergesort';
import { Button } from "react-bootstrap";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '../Algorithmstxt/mergesort.txt';

let ANIMATION_SPEED_MS = 20;
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
        //console.log(this.state.array);
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
        console.log(this.state.array);
        console.log(this.isSorted(this.state.array));
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
            }, ANIMATION_SPEED_MS*3030);
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
        console.log(speed);
        console.log("Speed:" + ANIMATION_SPEED_MS);
    }

    render() {
        const { array } = this.state;
        return (
            <React.Fragment>
                {/*<button onClick={() => this.resetArray()}>Reset</button>*/}
                
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
                    <Button className="d-inline-block array-container" onClick={() => this.mergeSort()} variant="secondary">
                        <h1 style={{
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
                {/*<button onClick={() => this.resetArray()}>Reset</button>
                <button onClick={() => this.mergeSort()}>MergeSort</button>
                <button onClick={() => this.pause(1000)}>Pause</button>
                <button onClick={() => this.testAlgos()}>test</button>*/}
            </React.Fragment>
        );
    }
}

function randomIntFromFunction(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default Sorting;