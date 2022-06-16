function bmiCalculator (weight, height) {
    var bmi = weight/Math.pow(height,2);
    if(bmi > 24.9){
        console.log("Your BMI is " + bmi + ", so you are overweight.");
    }
    else if(bmi <= 24.9 && bmi >= 18.5){
        console.log("Your BMI is " + bmi + ", so you have a normal weight.");
    }
    else{
        console.log("Your BMI is " + bmi + ", so you are underweight.");
    }
    return bmi;
}

bmiCalculator(60, 2);