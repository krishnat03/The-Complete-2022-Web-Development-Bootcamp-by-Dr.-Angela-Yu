//arrays
// var guestList = ["Krishna","vivek","shrey","yash","kailash"];
// console.log(guestList);
// console.log(guestList.length);
// console.log(guestList[0]);


var guestList = ["Krishna","vivek","shrey","yash","kailash"];
var guestName = prompt("What is your Name?");
if(guestList.includes(guestName)){
    alert("Welcome");
} else{
    alert("Sorry! you are not allowed.");
}