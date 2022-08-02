import React from "react";
import { createRoot } from "react-dom/client";
// import animals, {useAnimals} from "./data";
import cars from "./practice";

const container = document.getElementById("root");
const root = createRoot(container);

const [honda, tesla] = cars;
const {speedStats: {topSpeed: hondaTopSpeed}} = honda
const {speedStats: {topSpeed: teslaTopSpeed}} = tesla
const {coloursByPopularity: [hondaTopColour]} = honda
const {coloursByPopularity: [teslaTopColour]} = tesla

root.render(
    <table>
        <tr>
            <th>Brand</th>
            <th>Top Speed</th>
            <th>Top Colour</th>
        </tr>
        <tr>
            <td>{tesla.model}</td>
            <td>{teslaTopSpeed}</td>
            <td>{teslaTopColour}</td>
        </tr>
        <tr>
            <td>{honda.model}</td>
            <td>{hondaTopSpeed}</td>
            <td>{hondaTopColour}</td>
        </tr>
    </table>
);




// //destructuring arrays.
// // console.log(animals);
// const [cat, dog] = animals;
// // console.log(dog);

// Mechanimals();
// function Mechanimals() {
//     const [animal, makeSound] = useAnimals(cat);
//     console.log(animal);
//     makeSound();
// }


// //destructuring objects.
// // const {name, sound} = cat;
// // const {name: catName , sound: catSound} = cat;
// // const {name = "fluffy", sound = "Purr"} = cat;
// // const {name, sound, feedingRequirements: {food, water}} = cat;
// // const {feedingRequirements: {food, water}} = cat;
// // console.log(food);