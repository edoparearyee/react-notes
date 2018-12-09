import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TodoList.scss';
import Todo from '../Todo/Todo';

class TodoList extends Component {
  render() {
    return (
      <ul className="TodoList">
        {this.props.items.map((item, i) => (
          <Todo
            key={i}
            {...item}
            onChange={this.props.onChange}
            onToggle={this.props.onToggle}
            onDelete={this.props.onDelete}
          />
        ))}
      </ul>
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
