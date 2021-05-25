import React from 'react';
import './About.css';
// import { bounce } from 'react-animations';

// import Radium, {StyleRoot} from 'radium';
 
// const styles = {
//   bounce: {
//     animation: 'x 1s',
//     animationName: Radium.keyframes(bounce, 'bounce')
//   }
// }
export default function  About (){
   
    
        return (
       <div className = "about">
           <h1 className="first hello"  data-aos="fade-up" data-aos-duration="1000">About </h1>
           <section> 
               <h1 >What Algoviz actually is ?</h1>
               <p className = "foot">
                   AlgoViz is small project , that revolves around difficulty in understanding 
                   Data Structures and Algorithms as a beginner , so it helps an individual to get 
                   gist of some basic algorithms like searching and sorting which a beginner might otherwise 
                   face problems.
               </p>
           </section>
          
       </div>
       
        );
    }
