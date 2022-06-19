//change of dice 1
var randomNumber1 =  Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;

document.querySelector(".img1").setAttribute("src", randomImageSource);


//change of dice 2
var randomNumber2 =  Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;

document.querySelector(".img2").setAttribute("src", randomImageSource2);


//condition
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "🚩Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = "Player 2 Wins!🚩";
}
else{
    document.querySelector("h1").textContent = "Draw!";
}


