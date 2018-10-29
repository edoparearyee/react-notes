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
      <div className={todoClass}>
        <input
          className="Todo__Checkbox"
          type="checkbox"
          checked={this.props.complete}
          onChange={e => this.handleCompleteChange(e)}
        />
        <p
          className="Todo__Title"
          ref={c => (this._titleEl = c)}
          contentEditable={!this.props.complete}
          onInput={e => this.handleTitleChange(e)}
        >
          {this.props.title}
        </p>
      </div>
    );
  }

  handleCompleteChange(event) {
    this.props.onChange({
      id: this.props.id,
      complete: event.target.checked,
      title: this.props.title,
    });
  }

  handleTitleChange(event) {
    this.props.onChange({
      id: this.props.id,
      complete: this.props.complete,
      title: event.target.innerText,
    });
  }
}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  complete: PropTypes.bool,
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default Todo;
