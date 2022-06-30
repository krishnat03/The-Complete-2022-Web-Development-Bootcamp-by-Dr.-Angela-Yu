const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 3000;

let items = ["cooking", "drinking", "bathing"];

app.set('view engine', 'ejs');     //to view ejs file in views folder automatically


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));    // to add css 


app.get('/', (req, res) => {
    
    let today = new Date();
    
    let options = {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric"
    }

    let day = today.toLocaleDateString("en-IN", options);

    res.render("list", {kindOfDay : day, newListItems: items});

    
});

app.post("/", (req, res) => {
    let item = req.body.newItem;
    items.push(item);
    // console.log(item);
    res.redirect("/")
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