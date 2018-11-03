import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TodoList.scss';
import Todo from '../Todo/Todo';

class TodoList extends Component {
  render() {
    return (
      <div>
        {this.props.items.map(item => (
          <Todo
            key={item.id}
            id={item.id}
            title={item.title}
            complete={item.complete}
            onChange={this.props.onChange}
          />
        ))}
      </div>
    );
  }
}

TodoList.propTypes = {
  items: PropTypes.array.isRequired,
  onChange: PropTypes.func,
};

export default TodoList;
