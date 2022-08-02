import React from "react";
import { useState } from "react";

function App() {

    const [headingText, setHeadingtext] = useState("Hello");
    const [isMousedOver, setMouseOver] = useState(false);

    const handleClick = () => {
        setHeadingtext("Submitted");
    }
    const AfterHandleClick = () => {
        setHeadingtext("Hello");
    }

    setTimeout(AfterHandleClick, 5000);

    const handleMouseOver = () => {
        setMouseOver(true);
    }

    const handleMouseOut = () => {
        setMouseOver(false);
    }

    return (
        <div className="container">
            <h1>{headingText}</h1>
            <input type="text" placeholder="What's your name?" />
            <button
                style={{ backgroundColor: isMousedOver ? "black" : "White"}}
                onClick={handleClick}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >
                Submit
            </button>
        </div>
    );
}

export default App;