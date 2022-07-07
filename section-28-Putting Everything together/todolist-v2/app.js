const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const _ = require("lodash");

// console.log(date());

const app = express();

const port = 3000;



app.set('view engine', 'ejs');     //to view ejs file in views folder automatically


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));    // to add css 



mongoose.connect('mongodb://localhost:27017/todolistDB', { useUnifiedTopology: true });

const itemsSchema = {
    name: String
};

const Item = mongoose.model("item", itemsSchema);

const item1 = new Item({
    name: "Welcome to your todolist"
});


const defaultItems = [item1];

const listSchema = {
    name: String,
    items: [itemsSchema]
};

const List = mongoose.model("List", listSchema);

app.get('/', (req, res) => {


    Item.find({}, (err, foundItems) => {
        if (foundItems.length === 0) {
            Item.insertMany(defaultItems, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Sucessfully saved default items to database")
                }
            });
            res.redirect("/")
        } else {
            res.render("list", { listTitle: "Today", newListItems: foundItems });
        }
    })


});


app.get("/:customListName", (req, res) => {
    const customListName = _.capitalize(req.params.customListName);

    List.findOne({ name: customListName }, (err, foundList) => {
        if (!err) {
            if (!foundList) {
                //create a new list
                const list = new List({
                    name: customListName,
                    items: defaultItems
                });

                list.save();
                res.redirect("/" + customListName)
            } else {
                //Show an existing List
                res.render("list", { listTitle: foundList.name, newListItems: foundList.items });
            }
        }
    });


});


app.post("/", (req, res) => {

    const itemName = req.body.newItem;
    const listName = req.body.list;

    const item = new Item({
        name: itemName
    })

    if (listName === "Today") {
        item.save();
        res.redirect("/");
    } else {
        List.findOne({ name: listName }, (err, foundList) => {
            foundList.items.push(item);
            foundList.save();
            res.redirect("/" + listName);
        });
    }
});

app.post("/delete", (req, res) => {
    const checkedItemId = req.body.checkbox;
    // const buttonItemId = req.body.deleteButton;
    const listName = req.body.listName;

    if (listName === "Today") {
        Item.findByIdAndRemove(checkedItemId, (err) => {
            if (!err) {
                console.log("Sucessfully Deleted Item")
                res.redirect("/");
            }
        });
    } else {
        List.findOneAndUpdate({ name: listName }, { $pull: { items: { _id: checkedItemId } } }, (err, foundList) => {
            if (!err) {
                res.redirect("/" + listName);
            }
        });
    }

});


app.get("/about", (req, res) => {
    res.render("about");
});

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});
