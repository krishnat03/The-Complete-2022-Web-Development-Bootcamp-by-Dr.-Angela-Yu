import { React } from "react";
import { createRoot } from "react-dom/client";
// import pi, {doublePi, triplePi} from "./math";
// import * as pi from "./math";

import * as Calculator from "./calculator"

const container = document.getElementById("root");
const root = createRoot(container);



root.render(
  <ul>
    <li>{Calculator.add(1, 2)}</li>
    <li>{Calculator.subtract(2, 3)}</li>
    <li>{Calculator.multiply(7, 2)}</li>
    <li>{Calculator.divide(5, 2)}</li>
  </ul>
);