import React from "react";

const TodoForm = props => {
  return (
    <form onSubmit={props.taskAdd}>
      <input
        value={props.task}
        type="text"
        name="task"
        onChange={props.buttonHandler}
        placeholder="Things To Do"
      />
      <button role="submit">Submit</button>
      <button onClick={props.clearButton}>Clear</button>
    </form>
  );
};

export default TodoForm;
