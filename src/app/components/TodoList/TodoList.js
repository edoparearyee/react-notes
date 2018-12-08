import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TodoList.scss';
import Todo from '../Todo/Todo';

class TodoList extends Component {
  render() {
    return (
      <div>
        {this.props.items.map((item, i) => (
          <Todo key={i} {...item} onChange={e => this.props.onChange(e)} />
        ))}
      </div>
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
  ),
  onChange: PropTypes.func.isRequired,
};

export default TodoList;
