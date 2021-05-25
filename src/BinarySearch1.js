import React, { Component } from 'react';
import SearchingTiles from './SearchingTiles';
import './BinarySearch.css';
import { RandomInt } from './RandomInt';
import './Searching.css';
//import { render } from 'react-dom';
export default class BinarySearch extends Component
{
  constructor(props)
  {
   super(props);
   this.state={
    array: [],
    found: false,
    disabled: false,
    foundIndex: 0,
    target: null,
    msg: null,
    
    animations: [],
    completed: false,
    start: false,
   };
  }

  binarySearchAnimations(array,left,right,element,animations=[])
  {
   if(left>right)
   return false;
   else
   {
       let mid= parseInt((left+right)/2);
       if(array[mid]==element)
       {
         animations.push([left,right,mid,true]);
         return true;

       }
       else if(array[mid]<element)
       {
         animations.push([left,right,mid,false]);
         this.binarySearchAnimations(array,left,mid-1,element,animations);
        
       }
       else
       {
         animations.push([left,right,mid,false]);
         this.binarySearchAnimations(array,mid+1,right,element,animations);
       }


   }
  }

  componentDidMount()
  {
    this.resetArray();
  }

  resetArray()
  {
    let array=[];
    const prevArray=document.getElementsByClassName('binary-array-bar');
    document.getElementById("target").value="";

    for(let i=0;i<prevArray.length;i++)
    {
      prevArray[i].style.backgroundColor="purple";
      prevArray[i].classList.remove("hightlight");
      prevArray[i].classList.remove("growFind");
    }
    //random array creation
    for(let i=0;i<20;i++)
    {
      array.push(RandomInt(6,4000));
      
    }
    let arraySorted=array.sort((a,b)=>(a-b));

    this.setState(
      {
        array:arraySorted,
        found:false,
        disabled:false,
        target:null,
        msg:"",
        start:false,
        completed:false,
  
      }
    );


  
  }

  boundHighlight(start,end,arrayBars)
  {
     for(let i=start;i<=end;i++)
     { 
       setTimeout(()=>{
       arrayBars[i].style.backgroundColor="red";
       },i*300);

     }
  }
  resetTiles(arrayBars)
  {
    for(let i=0;i<arrayBars.length;i++)
    arrayBars[i].style.backgroundColor="purple";
  }

  binarySearch()
  {  const {array}=this.state;
    var msg="";
    const target= parseInt(document.getElementsByClassName("target"));
    const arrayBar=document.getElementsByClassName("binary-array-bar");
    if(target===NaN)
    {
      return undefined;
    }
    let startIndex=0;
    let midIndex=Math.ceil(array.length/2)-1;
    let endIndex=array.length-1;
    if (array[midIndex] == target) {
      startIndex = midIndex;
      endIndex = midIndex;
    } else if (array[midIndex]> target) {
      startIndex = 0;
      endIndex = midIndex - 1;
    } else {
      startIndex = midIndex + 1;
      endIndex = array.length - 1;
    }
    const animations=[];
    let count=0;
    this.binarySearchAnimations(array,startIndex,endIndex,target,animations);
    
    for(let i=0;i<animations.length;i++)
    {
      const [left,right,mid,found]=animations[i];
      count++;
      if( i === animations.length - 1 && found)
      {
        msg=`${target} found at index ${mid} 😄`;
        setTimeout(()=>{
        this.setState({
         start:true,
         completed:true,
         found:true,
         disabled:false,
        });
        this.resetTiles(arrayBar);
        arrayBar[mid].style.backgroundColor="green";
        arrayBar[mid].classList.add("growFind");
        arrayBar[mid].classList.add("highlight");
        },(i+1)*1000);
       if(!found)
       {
         msg=`${target} found at index ${mid} 😄`;
         setTimeout(()=>{
           this.setState(
             {
              start:true,
              found:false,
              completed:true,
             }
           );
           this.resetTiles(arrayBar);


         },(i+1)*1000);
       }
       setTimeout(()=>{
        this.setState(
          {
            start:true,
            disabled:true,
          }
          
        )
        this.resetTiles();
          this.boundHighlight(left,right,arrayBar);
       },(i)*1000);
      
      }

    }
     
    setTimeout(() => {
      this.setState({ disabled: false, start: true, msg: msg });
    }, count * 1000 );
  }
   
  render()
  { const {
    array,
    found,
    disabled,
    msg,
    start,
    completed,
  } = this.state;

    return(
      // <div data-aos="flip-left"  data-aos-easing="ease-out-cubic"
      // data-aos-duration="2000" >
    <div   className='jumbotron  jumbotron-fluid bg-white'>
    <center>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-4'></div>
          <div className='input-group col-sm-4'>
            <input
              type='number'
              id='binarySearchTargetVal'
              className='mr-2 form-control'
              placeholder='Element to be searched'
            />
            <div className='input-group-append'>
              <button
                onClick={() => this.binarySearch()}
                className='ui olive button'
                type='button'
                id='binarySearchBtn'
                disabled={!start ? false : true}
              >
                Search
              </button>
              <button
                onClick={() => this.resetArray()}
                className='ui violet button'
                id='binarySearchResetArray'
                type='button'
                disabled={disabled}
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
        {array.map((value, index) => (
          <SearchingTiles
            type={'BinarySearch'}
            key={index}
            index={index}
            value={value}
          />
        ))}
      </div>
      {completed ? (
        found ? (
          <p className='textmessage'>{msg}</p>
        ) : (
          <p className='textmessage'>{msg}</p>
        )
      ) : null}
    </center>
  </div>
  // </div>
  
);
  }
}