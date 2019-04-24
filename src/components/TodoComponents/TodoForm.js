import React from 'react';

const TodoForm = (props) => {
    return(
    <form onClick={props.taskAdd}>
        <input onChange={props.buttonHandler} placeholder="Things To Do"/>
            <button>Submit</button> 
            <button>Clear</button>
    </form>
    );
};

export default TodoForm