const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    // console.log(req);
    // res.send("Hello World!");
    res.send("<h1>Hello World!</h1>");
});

app.get('/contact', (req, res) => {
    res.send("Contact me at my home");
});

app.get('/about', (req, res) => {
    res.send("My name is Krishna Thakur and currently in fourth year of Electronics and Telecommunication Engineering at Atharva college of Engineering.");
});

app.get('/hobbies', (req, res) => {
    res.send("<ol><li>coding</li><li>swimming</li></ol>");
});



app.listen(port, () => {
    console.log(`server started on port ${port}`);
});