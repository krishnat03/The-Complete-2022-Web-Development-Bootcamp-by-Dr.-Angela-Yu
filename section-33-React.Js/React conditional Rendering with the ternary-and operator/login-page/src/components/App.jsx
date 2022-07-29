import React from "react";
import Login from "./Login";

var isLoggedIn = true;

// const currentTime = new Date().getHours();

// console.log(currentTime)

function App() {
  return (
    <div className="container"> {
      isLoggedIn ? <h1>Hello</h1> : <Login />
      /* currentTime > 10 ? <h1>Why are you still studying!</h1> : null */
      
      // in reactjs CONDITION && EXPRESSION if condition is true it returns the EXPRESSION if false it doesn't return any EXPRESSION
      //currentTime < 10 && <h1>Why are you still studying!</h1>     
    }</div>
  );
}

export default App;