const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB', { useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema ({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);    // to make collection

const fruit = new Fruit ({
    name: "Apple",
    rating: 8,
    review: "Great fruit" 
});

// fruit.save();

const personSchema = new mongoose.Schema ({
    name: String,
    age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person ({
    name: "John",
    age: 37 
});

// person.save();

// const kiwi = new Fruit ({
//     name: "Kiwi",
//     rating: 10,
//     review: "Great fruit" 
// }); 

// const orange = new Fruit ({
//     name: "Orange",
//     rating: 8,
//     review: "Good fruit" 
// }); 

// const banana = new Fruit ({
//     name: "Banana",
//     rating: 9,
//     review: "Best fruit" 
// }); 

// Fruit.insertMany([kiwi, banana, orange], (err) => {
//     if (err){
//         console.log(err);
//     } else {
//         console.log("Sucessfully Saved all the fruitsDB")
//     }
// });

// READING DATABASE WITH MONGOOSE

Fruit.find((err, fruits) => {
    if(err){
        console.log(err);
    } else {
        mongoose.connection.close();
        // console.log(fruits);

        fruits.forEach((fruit) => {
            console.log(fruit.name);
        });
    }
});