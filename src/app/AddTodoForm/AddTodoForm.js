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
          required
        />
        <button type="submit">Add</button>
      </form>
    );
  }

  handleTitleInput() {
    this.props.onInput({
      title: this._inputTitle.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    event.target.reset();
    this.props.onAdd({
      title: this._inputTitle.value,
    });
  }
}

AddTodoForm.propTypes = {
  onAdd: PropTypes.func,
  onInput: PropTypes.func,
};

export default AddTodoForm;
