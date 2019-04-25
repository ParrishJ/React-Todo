import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const ListItems = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      ListItemsState: ListItems,
      task: '', 
      id: '',
      completed: false
    }
  }

  changeHandler = event => {
    this.setState({
      task: {
        ...this.state.task,
      task: event.target.value
      },
      id: {
        ...this.state.id,
      }
    })
  }

  addTask = event => {
    event.preventDefault();
    this.setState({
        ListItemsState: [...this.state.ListItemsState, this.state.task],
        task: ''
    });
  };

  taskClick = id => {
    const updatedList = this.state.ListItemsState.map(clickItem => {
      if(clickItem.id === id){
        clickItem.completed = !clickItem.completed;
        return clickItem;
      } else {
        return clickItem;
      }
    });
    this.setState({ ListItemsState: updatedList})
    console.log(this.state)
  }

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
        <TodoList items ={this.state.ListItemsState} taskClick={this.taskClick}/>
        <TodoForm taskAdd={this.addTask} buttonHandler={this.changeHandler}/>
      </div>
    );
  }
}

export default App;
