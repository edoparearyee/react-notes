import React, { Component } from 'react';

import './TodosView.scss';
import TodoAddFormContainer from '../../containers/TodoAddForm/TodoAddForm';
import TodoListContainer from '../../containers/TodoList/TodoList';

class TodosView extends Component {
  render() {
    return (
      <div className="TodosView">
        <h1>Todos</h1>
        <TodoListContainer />
        <TodoAddFormContainer />
      </div>
    );
  }
}

export default TodosView;
