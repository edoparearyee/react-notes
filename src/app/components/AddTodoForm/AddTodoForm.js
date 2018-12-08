import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './AddTodoForm.scss';

class AddTodoForm extends Component {
  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <input
          ref={c => (this._inputTitle = c)}
          onInput={() => this.handleTitleInput()}
          name="title"
          type="text"
          value={this.props.value}
          required
        />
        <button type="submit">Add</button>
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

AddTodoForm.propTypes = {
  value: PropTypes.string.isRequired,
  onAdd: PropTypes.func,
  onInput: PropTypes.func,
};

export default AddTodoForm;
