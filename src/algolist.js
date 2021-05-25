import React from "react";

//import "./bootstrap.min.css";
import "./App.css";
import { Link } from "react-router-dom";


export default  function Algolist()
{
  return (
  <div className='container mt-20'>
        <br />
        <br />
        <table className='ui selectable inverted violet table center'>
          <thead>
            <tr>
              <th>Algorithm Category</th>
              <th className='right aligned'>Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Linear Search</td>
              <td className='right aligned'>
              <Link exact to={'/Searching'}className="nav-link  ">
                
                  /Linear Search
                </Link>
              </td>
            </tr>
            <tr>
              <td>Binary Search</td>

              <td className='right aligned'>
              <Link exact to={'/Searching'}  className="nav-link  ">
                /Binary Search 
               </Link>
              </td>
            </tr>
            <tr>
              <td>Sorting</td>

              <td className='right aligned'>
              
              <Link exact to={'/SortingVis'} className="nav-link  ">
                /Sorting
               </Link>
               
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
};