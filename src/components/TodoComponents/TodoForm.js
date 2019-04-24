import React from 'react';

const TodoForm = (props) => {
    return(
    <form onSubmit={props.taskAdd}>
        <input onChange={props.buttonHandler} placeholder="Things To Do"/>
            <button role="submit">Submit</button> 
            <button>Clear</button>
    </form>
    );
};

export default TodoForm