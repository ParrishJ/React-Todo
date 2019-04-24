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
      task: ''
    }
  }

  changeHandler = event => {
    this.setState({
      task: {
        ...this.state.task,
      task: event.target.value
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

  render() {
    return (
      <div>
        <h2>Things To Do:</h2>
        <TodoList items ={this.state.ListItemsState}/>
        <TodoForm taskAdd={this.addTask} buttonHandler={this.changeHandler}/>
      </div>
    );
  }
}

export default App;
