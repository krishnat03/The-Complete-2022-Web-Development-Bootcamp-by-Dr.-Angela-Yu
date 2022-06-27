const express = require('express');
const https = require('https');

const app = express();


const port = 3000;


app.get('/', (req, res) => {

    const url = "https://api.openweathermap.org/data/2.5/weather?q=Thane&appid=e31608f1dc6ef2a34e0c14e395b576a5&units=metric"
    https.get(url, (response) => {
        console.log(response.statusCode);
    });



    res.send("server is up and running");

});












app.listen(port, () => {
    console.log(`server started on port ${port}`)
});