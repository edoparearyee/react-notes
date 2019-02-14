import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Todo.scss';

class Todo extends Component {
  render() {
    const todoClass = classNames({
      Todo: true,
      'Todo--Complete': this.props.complete,
    });
    return (
      <li className={todoClass}>
        <input
          className="Todo__Checkbox"
          ref={c => (this._checkboxEl = c)}
          type="checkbox"
          checked={this.props.complete}
          onChange={() => null}
          onInput={e => this.handleToggle(e)}
        />
        <p
          className="Todo__Title"
          ref={c => (this._titleEl = c)}
          contentEditable={!this.props.complete}
          suppressContentEditableWarning={true}
          onInput={e => this.handleInput(e)}
        >
          {this.props.title}
        </p>
        <button
          className="Todo__Delete"
          type="button"
          onClick={e => this.handleDeleteClick(e)}
        >
          Delete
        </button>
      </li>
    );
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.title !== this._titleEl.innerText ||
      nextProps.complete !== this.props.complete
    );
  }

  handleToggle() {
    this.props.onToggle({
      id: this.props.id,
    });
  }

  handleDeleteClick() {
    this.props.onDelete({
      id: this.props.id,
    });
  }

  handleInput(event) {
    this.props.onChange({
      id: this.props.id,
      title: event.target.innerText,
    });
  }
}

Todo.propTypes = {
  id: PropTypes.string.isRequired,
  complete: PropTypes.bool,
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onToggle: PropTypes.func,
  onDelete: PropTypes.func,
};

export default Todo;
