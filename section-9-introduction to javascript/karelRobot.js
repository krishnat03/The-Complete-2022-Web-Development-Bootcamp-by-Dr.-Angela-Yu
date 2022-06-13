/*
function main(){
    diagonal();
    diagonal();
    diagonal();
    diagonal();
    putBeeper();
 }
 function diagonal(){
    putBeeper();
    move();
    turnLeft();
    move();
    turnRight();
 }

 main();
 */

 function main(){
    putAndMove();
    karelMove();
    karelMove();
    putAndMove();
    putBeeper();
 }
 
 function karelMove(){
    putAndMove();
    moveLeftAndMove();
    putAndMove();
    moveRightAndMove();
    putAndMove();
 }
 
 function moveLeftAndMove(){
    putBeeper();
    turnLeft();
    move();
    turnLeft();
    move();
 }
 
 function moveRightAndMove(){
    putBeeper();
    move();
    turnRight();
    move();
    turnRight();
 }
 
 function putAndMove(){
    putBeeper();
    move();
    move();
 } 