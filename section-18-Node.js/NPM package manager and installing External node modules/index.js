const superheroes = require('superheroes');
const supervillains = require('supervillains');

//superheroes
let mySuperheroName = superheroes.random();
// let mySuperheroName = superheroes.all;
console.log("Super Hero: " + mySuperheroName);

//supervillains
let mySupervillains = supervillains.random();
// let mySupervillains = supervillains.all;
console.log("Super Villains: " + mySupervillains);