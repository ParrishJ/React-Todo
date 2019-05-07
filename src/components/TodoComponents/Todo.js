import React from 'react';
import TodoList from './TodoList';
import './Todo.css'

/* const Todo = (props) => */
/* let classNames = "tasks";
if (props.task.completed){
    tasks
} */

const Todo = (props) => {
    return <div className={`taskItem${props.item.completed ? ' completed' : ''}`} 
            onClick={() => props.click(props.item.id)}>
            <h4>{props.item.task} </h4>
           </div>
}

export default Todo