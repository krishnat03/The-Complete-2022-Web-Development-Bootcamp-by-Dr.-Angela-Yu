// function whosPaying(names) {
    
//     var names = ["Krishna", "Vivek", "Kailash", "Tejas", "Ganesh"];
    
//     var randomName = names[Math.floor(Math.random()*names.length)];
//     return randomName + " is going to buy lunch today!";
// }

// whosPaying();


function whosPaying(names) {

    var names = ["Krishna", "Vivek", "Kailash", "Tejas", "Ganesh"];
    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names[randomPersonPosition];
    // return randomPerson + " is going to buy lunch today!";
    console.log(randomPerson);
}

whosPaying();