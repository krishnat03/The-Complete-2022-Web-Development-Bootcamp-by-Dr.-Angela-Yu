import { React } from "react";
import { createRoot } from "react-dom/client";
// import pi, {doublePi, triplePi} from "./math";
import * as pi from "./math";


const container = document.getElementById("root");
const root = createRoot(container);



root.render(
  <ul>
    <li>{pi.default}</li>
    <li>{pi.doublePi()}</li>
    <li>{pi.triplePi()}</li>
  </ul>
);