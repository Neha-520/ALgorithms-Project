import React, { useState, useEffect } from 'react';
import './Sorting.css';
import {getMergeSortAnimations,bubbleSort} from './sortAlgos.js';
import {QuickSortAlgorithm} from './QuickSort.js';




// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 270;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'rgb(236, 149, 164)';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'blue';

// NOTE: This method will only work if your sorting algorithms actually return
// the sorted arrays; if they return the animations (as they currently do), then
// this method will be broken.

const SortingVis = () => {

  const [array1, setArray1] = useState([]);
  const [value,setValue] = useState('');
  const [disable,setDisable] = useState('false');
  const resetArray = () => {
    const a = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      a.push(RandomInt(5, 600));
    }
    
    setArray1(a);
    setDisable(disable);
  }

  const mergeSort = () => {
    const SPEED = value;
    const animations = getMergeSortAnimations(array1);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('arrayBar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * (100 / SPEED));
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * (100 / SPEED));
      }
    }
  }
  const BubbleSort = () => {
    const SPEED = value;
    const animations = bubbleSort(array1);
   
    const arrayBars = document.getElementsByClassName("arrayBar");
    for (let i = 0; i < animations.length; i++) {
      const [barOneIndex, barTwoIndex] = animations[i];
      const styleOne = arrayBars[barOneIndex].style;
      const styleTwo = arrayBars[barTwoIndex].style;
      if (i % 2 == 0) {
        setTimeout(() => {
          styleOne.backgroundColor = "turquoise";
          styleTwo.backgroundColor = "rgb(236, 149, 164)";

        }, i * (100 / SPEED))

        setTimeout(() => {
          styleOne.backgroundColor = "turquoise";
          styleTwo.backgroundColor = "rgb(236, 149, 164)";

        }, (i + 1) * (100 / SPEED))
      }
      else {
        setTimeout(() => {

          const temp = styleOne.height;
          styleOne.height = styleTwo.height;
          styleTwo.height = temp;
        }, ((i + 2) * (100 / SPEED)));
      }
    } 
  }

 const QuickSort = () => {
    const ANIMATION_SPEED_MS = 10 / value;
    



    let count = 0;
    // eslint-disable-next-line
    const [animations] = QuickSortAlgorithm(array1);
    for (let i = 0; i < animations.length - 1; i++) {
      const isColorChange = animations[i][0] !== 'swapHeight';
      count++;
      const arrayBars = document.getElementsByClassName('arrayBar');
      if (isColorChange === true) {
        const color =
          animations[i][0] === 'comparison1' ? "red" : "lightgreen";
        // console.log(color);
        // eslint-disable-next-line
        const [temp, barOneIndex, barTwoIndex] = animations[i];
        if (barOneIndex === -1) {
          continue;
        }
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        // eslint-disable-next-line
        const [temp, barIndex, newHeight] = animations[i];
        if (barIndex === -1) {
          continue;
        }
        const barStyle = arrayBars[barIndex].style;
        setTimeout(() => {
          barStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
    // const s = document.getElementsByClassName('array-bar');
    // setTimeout(() => {
    //   for (let i = 0; i < s.length; i++) {
    //     //s[i].style.backgroundColor = "";
    //     console.log(s[i].style.backgroundColor);
    //   }
    //   //this.setState({ start: false });
    //   // this.generateEnable();
    // }, (count + 2) * ANIMATION_SPEED_MS);
  
  }


 const handleChange = (event) => {
    setValue(event.target.value);
    console.log(value);
  };
  // const testSortingAlgorithms = () => {
  //   for (let i = 0; i < 100; i++) {
  //     const ar = [];
  //     const length = RandomInt(1, 1000);
  //     for (let i = 0; i < length; i++) {
  //       ar.push(RandomInt(-1000, 1000));
  //     }
  //     const javaScriptSortedArray = ar.slice().sort((a, b) => a - b);
  //     const mergeSortedArray = getMergeSortAnimations(ar.slice());
  //     console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
  //   }
  // }
  // function arraysAreEqual(arrayOne, arrayTwo) {
  //   if (arrayOne.length !== arrayTwo.length) return false;
  //   for (let i = 0; i < arrayOne.length; i++) {
  //     if (arrayOne[i] !== arrayTwo[i]) {
  //       return false;
  //     }
  //   }
  //   return true;
  // }

 
  useEffect(() => {
    resetArray();
    setDisable(false);
  }, []);

  return (
    <>

      <div className="array-container mt-3">
        <center><h1 className="mb-5" >Sorting Algorithms</h1></center>
        
        {
          array1.map((value, index) => (
            <div className="arrayBar"
              key={index}
              style={{ height: `${value}px` }}
            >
            </div>
          ))
        }
        <div>
        <label for="typeinp">Speed:</label>
            <input id="typeinp" type="range" min="0" max="10" value={value} step="0.05" onChange={handleChange} />
        <center>
          <button className="btn btn-light headColor mt-2 m-3" onClick={resetArray} disabled={false}>Reset Array</button>
          <button className="btn btn-light headColor mt-2 m-3" onClick={mergeSort}>Merge Sort</button>
          <button className="btn btn-light headColor mt-2 m-3" onClick={BubbleSort}>Bubble Sort</button>
          <button className="btn btn-light headColor mt-2 m-3" onClick={QuickSort}>Quick Sort</button>
        </center>
        </div>
      </div>
    </>
  );
}
function RandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default SortingVis;