import React, { Component } from 'react';

import './App.scss';
import TodoListContainer from '../containers/TodoList/TodoList';
import TodoAddFormContainer from '../containers/TodoAddForm/TodoAddForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Todos</h1>
        <TodoListContainer />
        <TodoAddFormContainer />
      </div>
    );
  }
}

export default App;
