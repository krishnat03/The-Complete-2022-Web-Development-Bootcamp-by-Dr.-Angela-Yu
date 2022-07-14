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


///////////////////////////////////Requests Targeting all the Articles //////////////////////////////////
//chained Route handlers using express
app.route("/articles")

//get all articles
.get((req, res) => {
    Article.find((err, foundArticles) => {
        if(!err){
            res.send(foundArticles);
        } else {
            res.send(err);
        }
    })
})

//Post a New article
.post((req, res) => {
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
})

//Delete the article
.delete((req, res) => {
    Article.deleteMany((err) => {
        if(!err) {
            res.send("Sucessfully deleted all the articles");
        } else {
            res.send(err);
        }
    });
});


///////////////////////////////////Requests Targeting a specific Articles //////////////////////////////////

app.route('/articles/:articleTitle')
//get a specific title.
.get((req, res) => {

    Article.findOne({title: req.params.articleTitle}, (err, foundArticle)=>{
        if(foundArticle) {
            res.send(foundArticle);
        } else {
            res.send("No Articles matching that title was found.");
        }
    });
})

//replace a specfic title article. In this case it overwrites all the content 
.put((req, res) => {
    Article.updateOne(
        {title: req.params.articleTitle},
        {title: req.body.title, content: req.body.content},
        // {overwrite: true},
        (err) => {
            if (!err) {
                res.send("Sucessfully updated the article");
            } else {
                res.send("Unsucessfull");
            }
        }
    );
})

// replace a specific content. 
.patch((req, res) => {
    Article.updateOne(
        {title: req.params.articleTitle},
        {$set: req.body},
        (err) => {
            if (!err) {
                res.send("Sucessfully updated the article");
            } else {
                res.send(err);
            }
        }
    );
})

//delete a specific article
.delete((req, res) => {
    Article.deleteOne(
        {title: req.params.articleTitle},
        (err) => {
            if (!err) {
                res.send("Sucessfully deleted the corresponding article");
            } else {
                res.send(err);
            }
        }
    );
});




app.listen(port, () => {
    console.log(`server started on port ${port}`);
});
