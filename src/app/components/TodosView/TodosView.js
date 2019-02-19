import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import './TodosView.scss';
import TodoAddFormContainer from '../../containers/TodoAddForm/TodoAddForm';
import TodoListContainer from '../../containers/TodoList/TodoList';

class TodosView extends Component {
  render() {
    return (
      <div className="TodosView">
        <Typography component="h1" variant="h4" gutterBottom>
          Todos
        </Typography>
        <Card>
          <CardContent>
            <TodoListContainer />
          </CardContent>
        </Card>
        <TodoAddFormContainer />
      </div>
    );
  }
}

export default TodosView;
