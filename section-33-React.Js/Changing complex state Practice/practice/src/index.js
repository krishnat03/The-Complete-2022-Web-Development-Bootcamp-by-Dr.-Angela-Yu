import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App"

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <App />
);


// ES6 Spread Operator.
// const citrus = ["Lime", "Lemon", "Orange"];
// const fruits = ["Apple", ...citrus, "Banana", "Coconut", ...citrus];

// const fullName = {
//     fName: "James",
//     lName: "Bond"
// }

// const user = {
//     ...fullName,
//     id: 1,
//     username: "jamesbond007"
// }

// console.log(user);
// console.log(fruits);