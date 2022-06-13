// var name = "krishna";
// name = name.toUpperCase();
// name = name.toLowerCase();

// var name = prompt("what is yor name");
// name = name.toUpperCase();
// alert("Your Name is " + name);


// var name = prompt("what is yor name: ");
// var sliced = name.slice(0,1);
// // var slicedUpperCase = sliced.toUpperCase();
// // var remainingCharactersName = name.slice(1,name.length);
// name = sliced.toUpperCase() + name.slice(1,name.length);
// // name = slicedUpperCase + remainingCharactersName;
// alert("Your Name is " + name);

var name = prompt("what is yor name: ");
var firstChar = name.slice(0,1);
var restLetters = name.slice(1,name.length);
name = firstChar.toUpperCase() + restLetters.toLowerCase();
alert("Hello " + name);
