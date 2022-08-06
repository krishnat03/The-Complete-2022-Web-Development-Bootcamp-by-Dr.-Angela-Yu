import React from "react";
import { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
    
    const [items, setItems] = useState([]);

    const addItem = (inputText) => {
        setItems((prevItems) => {
            return [...prevItems, inputText];
        });
    }

    const deleteItem = (id) => {
        setItems(prevItems => {
            return prevItems.filter(
                (item, index) => {
                    return index !== id; 
                }
            )
        })
    }

    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <InputArea 
                onAdd={addItem}
            />
            <div>
                <ul>
                    {items.map((todoItem, index) => (
                        <ToDoItem 
                            key={index}
                            id={index}
                            text={todoItem}
                            onChecked={deleteItem}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;



// if (todoItem === findDuplicates(items)){
//     alert("You have entered" + todoItem + "twice. Please enter different todo-items")
// } else {
//     <li key={todoItem}>{todoItem}</li>
// }

// {/* <li key={todoItem}>{todoItem}</li> */}