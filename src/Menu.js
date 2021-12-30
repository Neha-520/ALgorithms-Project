import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";
import "./cover.css";


export default function Menu() {

  return (

    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column" data-aos="fade-right"
      data-aos-easing="linear"
    >
      <header >
        <NavLink activeClassName="nav-link navbar-brand navbar-dark font-weight-bolder font-awesome underline pl-3 pr-3" exact to="/" >
          <b className="h1"> AlgoViz </b></NavLink>

        <nav className="navbar navbar-dark  navbar-expand-lg justify-content-end mb-5 ">


          <NavLink activeClassName="  nav-link h6 font-weight-bold font-awesome underline " exact to="/"> Home </NavLink>
          <NavLink to={'/About'} className="nav-link h6 font-weight-bold "> About </NavLink>
          <NavLink to={'/Searching'} className="nav-link h6 font-weight-bold "> Searching </NavLink>
          <NavLink to={'/SortingVis'} className="nav-link h6 font-weight-bold "> Sorting </NavLink>
          <NavLink to={'/algolist'} className="nav-link h6 font-weight-bold "> Algortihms </NavLink>


        </nav>

      </header>

      <main role="main" className="inner cover mt-5" >
        <div data-aos="fade-up" data-aos-duration="1000" >
          <h1 className="cover-heading font " >Vizualize Your Way To Algorithms.</h1>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000">
          <p className="lead font2 p-2">AlgoViz is a simple and elegant web app that <br /> helps in visualising algorithms ,try it and learn in<br /> a unique way.
          </p>
          <NavLink to="/algolist" className="btn btn-lg btn-secondary headColor button2 ">Click to Algortihms</NavLink>
        </div>
      </main>

      <footer className="mastfoot mt-auto">
        <div className="inner">
          <p> Made with peace   <a href="/">😄  &copy; Algoviz</a>.</p>
        </div>
      </footer>
    </div>

  );
}

