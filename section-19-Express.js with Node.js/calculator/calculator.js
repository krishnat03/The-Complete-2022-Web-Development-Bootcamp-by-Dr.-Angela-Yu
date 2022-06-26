const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));    //  urlencoded : pass data that are coming from html form.  // extended: true - allows us to post nested objects. 

const port = 3000;




app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");        //The __dirname in a node script returns the path of the folder where the current JavaScript file resides.
});

app.get('/bmicalculator', (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html");        //The __dirname in a node script returns the path of the folder where the current JavaScript file resides.
});




app.post('/', (req, res) => {
    // console.log(req.body);
    // console.log(req.body.num1);   //it comes in text form 
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send("The result of addition is " + result);
});

app.post('/bmicalculator', (req, res) => {
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmiResult = weight/Math.pow(height,2);
    
    if(bmiResult > 24.9){
        res.send("Your BMI is " + bmiResult + ", so you are overweight.");
    }
    else if(bmiResult <= 24.9 && bmi >= 18.5){
        res.send("Your BMI is " + bmiResult + ", so you have a normal weight.");
    }
    else{
        res.send("Your BMI is " + bmiResult + ", so you are underweight.");
    }
});




app.listen(port, () => {
    console.log(`server started on port ${port}`);
});