import React, { Component } from 'react';

import './App.scss';
import TodoListContainer from '../containers/TodoList/TodoList';
import AddTodoFormContainer from '../containers/AddTodoForm/AddTodoForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Todos</h1>
        <TodoListContainer />
        <AddTodoFormContainer />
      </div>
    );
  }
}

export default App;
