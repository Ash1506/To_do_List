import React,{useState} from "react";
import { TodoForm } from "./TodoForm";
import {v4 as uuidv4} from "uuid";
import { Todo } from "./Todo";
import { EditTodoForm } from "./EditTodoForm";
uuidv4();
export const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);
    const addTodo = (todo) => {
        setTodos([...todos,{id:uuidv4(), task: todo, completed:false, isEditing:false}]);
    };
    const toggleComplete = id =>{
        setTodos(todos.map(todo => todo.id === id ? {...todo,completed: !todo.completed}:todo))
    };
    const deleteTodo = id =>{
        setTodos(todos.filter(todo=>todo.id !== id));
    }
    const editTodo = id =>{
        setTodos(todos.map(x=>x.id === id ? {...x,isEditing:!x.isEditing} : x));
    }
    const editTask = (value, id) =>{
        setTodos(todos.map(x=>x.id === id ? {...x,task:value ,isEditing:!x.isEditing} : x));
    }
    return(
        <div className="TodoWrapper">
            <h1>To do List</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) => (
                todo.isEditing ? (<EditTodoForm editTask={editTask} key={index} task={todo} />)
                : (<Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />)
            ))}
        </div>
    )
};