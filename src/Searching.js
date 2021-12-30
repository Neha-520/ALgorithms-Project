import React from "react";
import LinearSearch from "./LinearSearch.js";
import BinarySearch from "./BinarySearch.js";

import "./Searching.css";
function Searching() {
  return (
    <div>
      <br />
      <center>
        <h1 class="ui horizontal divider header" >Linear Search</h1>
      </center>
      <LinearSearch />
      <br />
      <center>
        <h1 class="ui horizontal divider header" >Binary Search</h1>
      </center>
      <BinarySearch />
    </div>
  );
}

export default Searching;
