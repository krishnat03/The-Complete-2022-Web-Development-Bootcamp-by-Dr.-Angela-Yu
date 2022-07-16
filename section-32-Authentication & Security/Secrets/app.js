require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
// const encrypt = require('mongoose-encryption');
// const md5 = require('md5');
const bcrypt = require('bcryptjs');


const salt = bcrypt.genSaltSync(10);


const app = express();

const port = 3000;


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


mongoose.connect("mongodb://localhost:27017/userDB", {useNewUrlParser: true});

const userSchema = new mongoose.Schema ({
    email: String,
    password: String
});


// userSchema.plugin(encrypt, { secret: process.env.SECRET, encryptedFields: ['password'] });


const User = new mongoose.model('User', userSchema);


app.get('/', (req, res) => {
    res.render('home');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', (req, res) => {

    const hash = bcrypt.hashSync(req.body.password, salt);
    
    const newUser = new User({
        email: req.body.username,
        password: hash
    });

    newUser.save((err) => {
        if (err) {
            console.log(err);
        } else {
            res.render('secrets');
        }
    });
});

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({email:username}, (err, foundUser) => {
        if (err) {
            console.log(err);
        } else {
            if (foundUser) {
                if(bcrypt.compareSync(password, foundUser.password)){
                    res.render('secrets');
                } else {
                    res.send("Oops! Please type the correct username and Password");
                }
            }
        }
    })
});

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});
