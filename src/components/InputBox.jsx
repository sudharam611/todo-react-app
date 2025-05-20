// InputBox Component
// Used to render a input field with an add button
// Props:
// addTodoItem - function to add a new todo to the list


import React, {useState} from "react";

function InputBox({addTodoItem}) {
    const [userInput, setUserInput] = useState("");
    const handleAdd = () => {
        if(userInput.trim()){
            addTodoItem(userInput);
            setUserInput("");
        }
    }
    return (
        <form className="input-form" onSubmit={(e) => {
            e.preventDefault();
            handleAdd();
        }}
        >
            <input type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} placeholder="Enter your task..." />
            <button className="add-button" onClick={handleAdd}>Add</button>
        </form>
    )
}

export default InputBox;