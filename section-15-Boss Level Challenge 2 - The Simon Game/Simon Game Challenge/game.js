var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];


$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    // var userChosenColour = document.querySelector(".btn").getAttribute("id");
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
});



function nextSequence(){
    var randomNumber =  Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50);
    
    var audio = new Audio('sounds/' + randomChosenColour + ".mp3");
    audio.play();

}

nextSequence();