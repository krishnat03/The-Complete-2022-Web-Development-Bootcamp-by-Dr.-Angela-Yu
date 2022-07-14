const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');

const app = express();

const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


//connecting MongoDB Database
mongoose.connect('mongodb://localhost:27017/wikiDB', {useNewUrlParser: true});

//Schema
const articleSchema = new mongoose.Schema({
    title: String,
    content: String
});

//Model
const Article = mongoose.model("Article", articleSchema);



//get all articles
app.get('/articles', (req, res) => {
    Article.find((err, foundArticles) => {
        if(!err){
            res.send(foundArticles);
        } else {
            res.send(err);
        }
    })
});

//Post a New article
app.post("/articles", (req, res) => {
    // console.log(req.body.title); 
    // console.log(req.body.content); 

    const newArticle1 = new Article({
        title: req.body.title,
        content: req.body.content
    })

    newArticle1.save((err) => {
        if(!err) {
            res.send("Sucessfully added a new article.");
        } else {
            res.send(err);
        }
    });
});

//Delete the article
app.delete("/articles", (req, res) => {
    Article.deleteMany((err) => {
        if(!err) {
            res.send("Sucessfully deleted all the articles");
        } else {
            res.send(err);
        }
    });
});






app.listen(port, () => {
    console.log(`server started on port ${port}`);
});
