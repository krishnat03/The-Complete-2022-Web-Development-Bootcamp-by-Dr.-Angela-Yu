const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    
    var today = new Date();
    // console.log(today);
    var currentDay = today.getDay();
    // console.log(currentDay);
    var day = "";

    switch (currentDay) {
        case 0:
            day = "Sunday"
            break;
        case 1:
            day = "Monday"
            break;
        case 2:
            day = "Tuesday"
            break;
        case 3:
            day = "Wednesday"
            break;
        case 4:
            day = "Thursday"
            break;
        case 5:
            day = "Friday"
            break;
        case 6:
            day = "Saturday"
            break;
    
        default:
            console.log("Error: current is equal to: " + currentDay)
            break;
    }

    res.render("list", {
        kindOfDay : day
    });
});

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});











        // day = "Weekend";
        // res.send('<h1>Yay! its weekend</h1>');

        // res.write('<h1>ohh!</h1>');
        // res.write('<h1>ohh! its week day focus on your work.</h1>');
        // res.send();
        // day = "Weekday";
        // res.sendFile(__dirname + "/index.html");