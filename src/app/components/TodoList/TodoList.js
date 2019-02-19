import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';

import './TodoList.scss';
import Todo from '../Todo/Todo';

class TodoList extends Component {
  render() {
    return (
      <List className="TodoList">
        {this.props.items.map((item, i) => (
          <Todo
            key={i}
            {...item}
            onChange={this.props.onChange}
            onToggle={this.props.onToggle}
            onDelete={this.props.onDelete}
          />
        ))}
      </List>
    );
  }
}

TodoList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      complete: PropTypes.bool,
    }),
  ).isRequired,
  onChange: PropTypes.func,
  onToggle: PropTypes.func,
  onDelete: PropTypes.func,
};

export default TodoList;
