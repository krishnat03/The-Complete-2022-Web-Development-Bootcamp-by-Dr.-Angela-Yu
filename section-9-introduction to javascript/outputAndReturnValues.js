/*
function getMilk(money) {
    console.log("LeaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    var numberOfBottles = Math.floor(money / 1.5);
    console.log("Bought " + numberOfBottles + " bottles");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");   

    return money % 1.5;
}

var change = getMilk(8);
console.log("Your change is " + change);

*/

/*
function getMilk(money) {
    console.log("LeaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");

    console.log("buy " + calcBottles(money, 1.5) + " bottles of milk")
    
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");   

    return money % 1.5;
}

function calcBottles(startingMoney, costPerBottle){
    var numberOfBottles = Math.floor(startingMoney / costPerBottle);

    return numberOfBottles;
}

var change = getMilk(8);
console.log("Your change is " + change);

*/


/*
function getMilk(money) {
    console.log("LeaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");

    console.log("buy " + calcBottles(money, 1.5) + " bottles of milk")
    
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");   

    return calcChange(money, 1.5);
}

function calcBottles(startingMoney, costPerBottle){
    var numberOfBottles = Math.floor(startingMoney / costPerBottle);
    return numberOfBottles;
}

function calcChange(startingMoney, costPerBottle) {
    var change = startingMoney % costPerBottle;
    return change;
}

var change = getMilk(8);
console.log("Your change is " + change);
*/


function getMilk(money, costPerBottle) {
    console.log("LeaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");

    console.log("buy " + calcBottles(money, costPerBottle) + " bottles of milk")
    
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");   

    return calcChange(money, costPerBottle);
}

function calcBottles(startingMoney, costPerBottle){
    var numberOfBottles = Math.floor(startingMoney / costPerBottle);
    return numberOfBottles;
}

function calcChange(startingMoney, costPerBottle) {
    var change = startingMoney % costPerBottle;
    return change;
}

var change = getMilk(8, 2.5);
console.log("Your change is " + change);


