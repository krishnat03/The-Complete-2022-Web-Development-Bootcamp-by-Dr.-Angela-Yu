import React from "react";



function App() {
  // declarative Programming
  var isDone = true;

  const strikeThrough = {textDecoration: "line-through"}
  
  return <p style={isDone && strikeThrough}>Buy milk</p>
}

export default App;