const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const port = 3000;


app.get('/', (req, res) => {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req, res) => {
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;

    // console.log(firstName, lastName, email);

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    }

    const jsonData = JSON.stringify(data);

    const url = "https://us10.api.mailchimp.com/3.0/lists/b4cbe30079";

    const options = {
        method: "POST",
        auth: "krishna1:23a2a5207712c400b41efe37db98dfd7-us10"
    }

    const request = https.request(url, options, (response) => {

        if (response.statusCode === 200) {
            res.sendFile(__dirname + "/sucess.html" );
        } else {
            res.sendFile(__dirname + "/failure.html" );
        }

        response.on("data", (data) => {
            console.log(JSON.parse(data));
        });
    });

    request.write(jsonData);
    request.end();


});

app.post("/failure", (req, res) => {
    res.redirect("/");
});




app.listen(process.env.PORT || port, () => {            //process.env.PORT : it will allow random selection of port.
    console.log(`server started on port ${port}`);
});




//api key
// 23a2a5207712c400b41efe37bb98dfd7-us10

//list id/ Audience id
//b4cbe31079