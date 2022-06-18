// var output = [];
// output.push(1);   //pushes the item at the end
// output.pop(1);   //it pops the item from the end
// output.push(2);
// output.push(3);
// output.push(1);

var output = [];
var a = 0;
function fizzBuzz(){
    a = a + 1;
    // if(a % 3 !== 0 && a % 5 !== 0){
    //     output.push(a);   
    // }
    if(a % 3 === 0 && a % 5 === 0){
        output.push("fizzBuzz")
    }
    else if(a % 3 === 0){
        output.push("fizz");
    }
    else if(a % 5 === 0){
        output.push("buzz");
    }
    else{
        output.push(a)
    }
    console.log(output);
}