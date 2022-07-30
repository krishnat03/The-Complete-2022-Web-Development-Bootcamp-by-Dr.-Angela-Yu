import React from "react";

//Imperative Programming
function strike() {
  document.getElementById("root").style.textDecoration = "line-through";
}
function unStrike() {
  document.getElementById("root").style.textDecoration = "none";
}


function App() {
  return (
    <div>
      <p>Buy milk</p>
      <button onClick={strike}>Change to Strike through</button>
      <button onClick={unStrike}>Change back</button>
    </div>
  )

}

export default App;