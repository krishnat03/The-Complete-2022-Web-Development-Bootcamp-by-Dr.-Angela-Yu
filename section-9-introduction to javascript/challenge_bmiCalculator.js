
/*
function bmiCalculator(weightInKg, heightInM){
    var bmi = (weightInKg)/((heightInM)**2);
    console.log("Your BMI value is " + bmi);
}

bmiCalculator(83.5, 1.78);
*/

function bmiCalculator(weight, height){
    var bmi = weight / (height*height);  //Math.pow(base, exponent)
    bmi = Math.round(bmi);
    return bmi;
}

var bmi = bmiCalculator(65, 1.8); 
console.log(bmi);
