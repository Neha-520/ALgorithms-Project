import React  from "react";
import {NavLink} from "react-router-dom";
import "./Menu.css";
import "./cover.css";


export default function Menu () {
 
    return (

      <div  className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column" data-aos="fade-right"
      data-aos-easing="linear"
      >
  <header >
  <NavLink activeClassName="nav-link navbar-brand navbar-dark font-weight-bolder font-awesome underline pl-3 pr-3" exact to="/" >
		<b className="h1"> AlgoViz </b></NavLink>
      
      <nav className="navbar navbar-dark  navbar-expand-lg justify-content-end  ">
     
           
           <NavLink activeClassName="  nav-link h6 font-weight-bold font-awesome underline " exact to="/"> Home </NavLink>
           <NavLink to={'/About'} className="nav-link h6 font-weight-bold "> About </NavLink>
           <NavLink to={'/Searching'} className="nav-link h6 font-weight-bold "> Searching </NavLink>
           <NavLink to={'/SortingVis'} className="nav-link h6 font-weight-bold "> Sorting </NavLink>
           <NavLink to={'/algolist'} className="nav-link h6 font-weight-bold "> Algortihms </NavLink>
           
        
      </nav>
   
  </header>

  <main role="main" className="inner cover mt-5" >
  <div data-aos="fade-up" data-aos-duration="1000" >
    <h1 className="cover-heading" >Vizualize your way to algorithms.</h1>
    </div>
    <div  data-aos="fade-up" data-aos-duration="2000">
    <p className="lead pt-3 pb-2">AlgoViz is a  simple and elegant web app that helps in visualising algorithms
    ,try it and learn in a unique way.
    </p>
    <p className="lead">
    
            <NavLink  to ="/algolist" className="btn btn-lg btn-secondary headColor mt-2 ">Click to Algortihms</NavLink>
               
    </p>
    </div>
  </main>

  <footer className="mastfoot mt-auto">
    <div className="inner">
      <p> Made with peace   <a href="https://twitter.com/mdo">😄  &copy; algoviz</a>.</p>
    </div>
  </footer>
</div>

    );
  }

