const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js");

// console.log(date());

const app = express();

const port = 3000;

let items = [];
let workItems = [];

app.set('view engine', 'ejs');     //to view ejs file in views folder automatically


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));    // to add css 


app.get('/', (req, res) => {
    
    let day = date.getDate();
    res.render("list", {listTitle : day, newListItems: items});

    
});

app.post("/", (req, res) => {
    console.log(req.body)
    let item = req.body.newItem;

    if(req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        // console.log(item);
        res.redirect("/");
    }
    
    
});

app.get("/work", (req, res) => {
    res.render("list", {listTitle: "Work List", newListItems: workItems});
});

// app.post("/work", (req, res) => {
//      let item = req.body.newItem;
//      workItems.push(item);
//      res.redirect("/work")
// });

app.get("/about", (req, res) => {
    res.render("about");
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