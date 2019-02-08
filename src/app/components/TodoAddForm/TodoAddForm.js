import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TodoAddForm.scss';

class TodoAddForm extends Component {
  render() {
    return (
      <form className="TodoAddForm" onSubmit={e => this.handleSubmit(e)}>
        <input
          className="TodoAddForm__Title"
          ref={c => (this._inputTitle = c)}
          onInput={e => this.handleTitleInput(e)}
          name="title"
          type="text"
          value={this.props.value}
        />
        <button type="submit" disabled={!this.props.value.length}>
          Add
        </button>
      </form>
    );
  }

  handleTitleInput(event) {
    this.props.onInput({
      value: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onAdd({
      title: this.props.value,
    });
  }
}

TodoAddForm.propTypes = {
  value: PropTypes.string.isRequired,
  onAdd: PropTypes.func,
  onInput: PropTypes.func,
};

export default TodoAddForm;
