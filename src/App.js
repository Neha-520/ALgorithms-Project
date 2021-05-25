import React from "react";
import {BrowserRouter} from "react-router-dom";
import MainRouter from "./MainRouter";
//import "./Menu.js";
//import "./bootstrap.min.css";
function App() {
  return <BrowserRouter>
  <MainRouter />
  </BrowserRouter>
    
    ;
}

export default App;
