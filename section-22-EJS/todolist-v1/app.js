const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    
    var today = new Date();
    var currentDay = today.getDay();
    var day = "";
    if(currentDay === 6 || currentDay === 0){
        day = "Weekend";
    } else {
        day = "Weekday";
    }

    res.render("list", {kindOfDay : day});
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