var output = [];
// var a = 1;
function fizzBuzz(){
    for(var a = 1; a<=100; a++){
        if(a % 3 === 0 && a % 5 === 0){
            output.push("fizzBuzz");
        } else if(a % 3 === 0){
            output.push("fizz");
        } else if(a % 5 === 0){
            output.push("buzz");
        } else{
            output.push(a)
        }  
    }
    console.log(output);
}