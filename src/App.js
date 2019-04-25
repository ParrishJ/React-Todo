import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

const ListItems = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ListItemsState: ListItems,
      task: ""
      // id: '',
      // completed: false
    };
  }

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addTask = event => {
    event.preventDefault();
    this.setState({
      ListItemsState: [
        ...this.state.ListItemsState,
        {
          task: this.state.task,
          id: Date.now(),
          completed: false
        }
      ],
      task: ""
    });
  };

  clearButton = event => {
    event.preventDefault();
    this.setState({
      ListItemsState: this.state.ListItemsState.filter(task => {
        return(
          !task.completed 
        )
      })
    })
  }

  /* addTask = event => {
    event.preventDefault();
    this.setState({
      todoList: [
        ...this.state.todoList,
        {
          task: this.state.task,
          id: Date.now(),
          completed: false
        }
      ],
      task: ''
    });
  }; */

  taskClick = id => {
    const updatedList = this.state.ListItemsState.map(clickItem => {
      if (clickItem.id === id) {
        clickItem.completed = !clickItem.completed;
        return clickItem;
      } else {
        return clickItem;
      }
    });
    this.setState({ ListItemsState: updatedList });
    console.log(this.state);
  };

  /* clear = () => {
    const clearedTaskArray = this.state.ListItemsState.fileter((task => {
      if (!task.completed){

      }
    }))
  } */

  render() {
    return (
      <div>
        <h2>Things To Do:</h2>
        <TodoList
          items={this.state.ListItemsState}
          taskClick={this.taskClick}
        />
        <TodoForm 
          taskAdd={this.addTask} 
          buttonHandler={this.changeHandler}
          task={this.state.task}
          clearButton={this.clearButton}
           />
      </div>
    );
  }
}

export default App;
