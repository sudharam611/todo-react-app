// ListItem Component
// Used to render single li with : checkbox, todo text and delete button
// Props:
// todo - {id, text, completed}
// toggleComplete - function to toggle the todo completed status
// deleteTodo - function to delete the todo


import React from "react";

function ListItem({todo, toggleComplete, deleteTodo}) {
    return (
        <li className={`list-item ${todo.completed ? "completed" : ""}`}>
            <div className="left-side">
                <input type="checkbox" checked={todo.completed} onChange={toggleComplete} />
                <span>{todo.text}</span>
            </div>
            <button className="delete-button" onClick={deleteTodo}>&times;
            </button>
        </li>
    )
}

export default ListItem;