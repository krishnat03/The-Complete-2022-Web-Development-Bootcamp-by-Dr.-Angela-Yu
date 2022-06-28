const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

const port = 3000;


app.get('/', (req, res) => {

    res.sendFile(__dirname + "/index.html");
    



    // res.send("server is up and running");

});

app.post("/", (req, res) => {
    // console.log("Post Recieved");
    // console.log(req.body.cityName);

    const query = req.body.cityName;
    const apiKey = "e31608f1dc6ef2a34e0c14e395b576a5";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit + "";
    https.get(url, (response) => {
        console.log(response.statusCode);

        response.on('data', (data) => {
            const weatherData = JSON.parse(data);
            // console.log(weatherData);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
            // console.log(temp);
            // console.log(weatherDescription);
            
            res.write("<h1>The weather in " + query + " is " + temp + " degrees Celcius.</h1>");
            res.write("<p>The weather is currently " + weatherDescription + ".</p>");
            res.write("<img src=" + imageURL + ">");
            res.send();

            // const object = {
            //     name: "Krishna",
            //     Age: 22
            // }
            // console.log(JSON.stringify(object));

        });
    });
})










app.listen(port, () => {
    console.log(`server started on port ${port}`)
});