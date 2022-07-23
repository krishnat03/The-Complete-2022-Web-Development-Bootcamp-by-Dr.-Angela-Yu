import { React } from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);

const date = new Date();

const currentTime = date.getHours();

let greeting;

const customStyle = {
  color : "",
}

if (currentTime < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good Evening";
  customStyle.color = "blue";
}

root.render(<h1 className="heading" style={customStyle}>{greeting}</h1>);