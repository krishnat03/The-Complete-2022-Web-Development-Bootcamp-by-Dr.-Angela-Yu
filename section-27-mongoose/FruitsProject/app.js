const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB', { useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema ({
    name: String,
    rating: Number,
    review: String
});

//Data Validation
// const fruitSchema = new mongoose.Schema ({
//     name: {
//         type: String,
//         required: [true, "Please Check your data entry, no name specified!"]
//     },
//     rating: {
//         type: Number,
//         min: 1,
//         max: 10
//     },
//     review: String
// });

const Fruit = mongoose.model("Fruit", fruitSchema);    // to make collection

const fruit = new Fruit ({
    name: "Peach",
    rating: 10,
    review: "Dragon Fruit is the best" 
});

// const fruit = new Fruit ({
                                           // it will show error since the name is validated or checked
//     rating: 10,
//     review: "Great fruit" 
// });

// fruit.save();

const personSchema = new mongoose.Schema ({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);


// relationship
const pineapple = new Fruit ({
    name: "Pineapple",
    rating: 10,
    review: "Fruit is the best" 
});

// pineapple.save();

// const person = new Person ({
//     name: "John",
//     age: 37 
// });

const person = new Person ({
    name: "Soham",
    age: 12,
    favouriteFruit: pineapple
});

// person.save();
//relationship

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

//updation

// Fruit.updateOne({_id: "62c58e4cf9ba4c8ca7edd745"}, {name: "Dragon Fruit"}, (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Sucessfully updated the document")
//     }
// });


//deletion
// Fruit.deleteOne({_id: "62c58e4cf9ba4c8ca7edd745"},(err) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("Sucessfully deleted the document")
//         }
// });

// Person.deleteMany({name:"John"}, (err) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("Sucessfully deleted the document")
//         }
// });


//relationship



const mango = new Fruit ({
    name: "Mango",
    rating: 9,
    review: "Mango is the best" 
});

mango.save();

Person.updateOne({name:"John"}, {favouriteFruit: mango}, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Sucessfully updated the document")
    }
})