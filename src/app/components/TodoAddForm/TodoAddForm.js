import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TodoAddForm.scss';

class TodoAddForm extends Component {
  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <input
          ref={c => (this._inputTitle = c)}
          onInput={() => this.handleTitleInput()}
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

  handleTitleInput() {
    this.props.onInput({
      value: this._inputTitle.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onAdd({
      title: this._inputTitle.value,
    });
  }
}

TodoAddForm.propTypes = {
  value: PropTypes.string.isRequired,
  onAdd: PropTypes.func,
  onInput: PropTypes.func,
};

export default TodoAddForm;
