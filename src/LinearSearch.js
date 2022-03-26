import React from "react";
import SearchingTiles from "./SearchingTiles";
import "./LinearSearch.css";
import { RandomInt } from "./RandomInt";
import "./Searching.css";

export default class LinearSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      message: "",
      disabled: false,
      found: false,
      findex: 0,
      target: null,
      start: false,
      completed: false
    };
  }

  linearSearchAnimations = (array, target) => {
    let animations = [];
    for (let i = 0; i < array.length; i++) {
      const t = parseInt(target);
      if (array[i] === t) {
        animations.push([i, array[i], true]);
        break;
      } else {
        animations.push([i, array[i], false]);
      }
    }
    console.log(animations);
    return animations;
  };

  Arrayreset() {
    const array = [];
    const message = "";
    const disabled = false;
    const found = true;
    const target = null;
    const start = false;
    const completed = false;
    document.getElementById("target").value = "";


    const previousArray = document.getElementsByClassName("linear-array-bar");
    for (let index = 0; index < previousArray.length; index++) {
      previousArray[index].style.backgroundColor = "blue";
      previousArray[index].classList.remove("grad");
      previousArray[index].classList.remove("growFind");
      previousArray[index].classList.remove("highlight");
    }
    for (let i = 0; i < 20; i++) {
      array.push(RandomInt(3, 1000));
    }
    // console.log(array);
    this.setState({
      array: array,
      message: message,
      disabled: disabled,
      found: found,
      target: target,
      start: start,
      completed: completed
    });
  };

  componentDidMount() {
    this.Arrayreset();
  }
  componentDidUnMount() {
    this.Arrayreset();
  }

  //main function linear search
  LinearSearch() {

    let msg = "";
    const target = document.getElementById("target").value;
    // console.log(target);
    if (target === "" || target === "0") {
      return undefined;
    }
    // eslint-disable-next-line
    const animations = this.linearSearchAnimations(this.state.array, target);
    console.log(animations);

    let count = 0;
    for (var i = 0; i < animations.length; i++) {
      count++;
      const [index, value, found] = animations[i];
      const bars = document.getElementsByClassName("linear-array-bar");
      const bar = bars[index];
      if (found) {
        let msg = `${target} found at index ${i} 😃 `;
        setTimeout(() => {
          this.setState(
            {
              found: true,
              disabled: false,
              findex: index,
              completed: true,
              target: value,
              start: true,
              message: msg,

            }
          );
          bar.classList.remove("grad");
          bar.style.backgroundColor = "#32CD32";
          bar.classList.add("growFind");
          bar.classList.add("highlight");
        }, i * 400);
      }
      else {
        let completed = false;
        if (i === 19)
          completed = true;

        let msg = ` ${target}  not present in the array 🙅‍♂️`;
        setTimeout(() => {
          this.setState(
            {
              found: false,
              disabled: true,
              message: msg,
              completed: completed,
              start: true
            }
          );
          bar.classList.add("grad");
          // barStyle.backgroundColor="red";
          bar.classList.add("growFind");
          //bar.classList.add("highlight");
        }, i * 400);
      }

    }
    console.log(count);

    setTimeout(() => {
      this.setState({ message: msg });
    }, count * 1000);
  }


  render() {
    const { array, message, start, completed } = this.state;

    console.log(completed);
    return (
      <div className='jumbotron jumbotron-fluid bg-white'>
        <center >
          <div className='container' >
            <div className='row'>
              <div className='col-sm-4'></div>
              <div className='input-group col-sm-4'>
                <input
                  type='number'
                  id='target'
                  className='mr-2 form-control'
                  placeholder='Search Element'
                />
                <div className='input-group-append'>
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => this.LinearSearch()}

                    type='button'
                    id='LinearSearchBtn'
                    disabled={start && !completed ? true : false}
                  >
                    Search
                  </button>
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => this.Arrayreset()}

                    id='LinearSearchResetArray'
                    type='button'
                    disabled={start && !completed ? true : false}
                  >
                    Reset Array
                  </button>
                </div>
              </div>
              <div className='col-sm-1 '></div>
            </div>
          </div>
          <br />
          <div className='container'>
            {array.map((item, i) => {
              return (
                <SearchingTiles type={LinearSearch}
                  index={i} value={item} />
              );
            })}
          </div>
          {completed ? (
            <p className='textmessage'>{message}</p>
          ) : null}
        </center>
      </div>
    );

  }
}
