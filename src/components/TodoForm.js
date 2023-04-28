import React, {useState} from "react";

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault(); //to avoid refresh after button click
        addTodo(value);
        setValue(""); //to clear the text box after submit
    };
    return(
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input type="text" value={value} className="todo-input" placeholder="Enter the task" onChange={(e) => setValue(e.target.value)} />
            <button type="submit" className="todo-btn">Add Task</button>
        </form>
    )
    
};