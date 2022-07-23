import React from "react";
import ReactDOM from "react-dom";

const name = "Krishna Thakur";
 
const date = new Date();
const year = date.getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);