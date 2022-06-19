var heading = document.firstElementChild.lastElementChild.firstElementChild;
heading.innerHTML = "Good Bye!";
heading.style.color = "red";
document.querySelector("input").click();

var list = document.getElementById("third");
list.innerHTML = "Krishna Thakur";

document.getElementsByTagName("li")[2].style.color = "blue";
document.getElementsByTagName("li").length;

document.getElementsByClassName("btn")[0].style.color = "green";

document.getElementById("title").innerHTML = "HI";

//selecting HTML Elements with JavaScript
document.querySelector("#title");
document.querySelector(".btn");
document.querySelector("a");   //selects first anchor tag
document.querySelector("li a");   //selects specific anchor tag
document.querySelector("li.item");   //selects specific tag
document.querySelector("#list a");   //selects specific tag

document.querySelectorAll("#list .item");   //selects all list class
document.querySelectorAll("#list .item")[2].style.color = "green";

document.querySelector("li a").style.color = "red";



// Manipulating and changing styles properties of Html Elements
// document.querySelector("h1").style.fontSize = "10rem";
// document.querySelector("h1").style.padding = "2%";
document.querySelector(".btn").style.backgroundColor = "yellow";


// add a class using classList
document.querySelector("button").classList;
document.querySelector("button").classList.add("invisible");
document.querySelector("button").classList.remove("invisible");
document.querySelector("button").classList.toggle("invisible");
document.querySelector("h1").classList.add("huge");



// Text Manipulation and the text content property
document.getElementById("title").innerHTML = "HI";
document.getElementById("title").textContent = "Good Bye";
document.querySelector("h1").innerHTML = "HI";
document.querySelector("h1").textContent = "Good Bye";

// difference
// document.querySelector("h2").innerHTML
// '<strong>Hello</strong>'
// document.querySelector("h2").textContent
// 'Hello'
// document.querySelector("h2").innerHTML = "<em>HI</em>"
// '<em>HI</em>'





//Manipulating HTML ELEMENT Attributes
document.querySelector("a");
document.querySelector("a").attributes;
document.querySelector("a").getAttribute("href");
document.querySelector("a").setAttribute("href", "https://bing.com");