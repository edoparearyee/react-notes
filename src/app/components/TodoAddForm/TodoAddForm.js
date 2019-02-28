import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './TodoAddForm.scss';

class TodoAddForm extends Component {
  render() {
    return (
      <form className="TodoAddForm" onSubmit={e => this.handleSubmit(e)}>
        <div className="TodoAddForm__Input">
          <TextField
            className="TodoAddForm__Title"
            id="title"
            label="Enter todo"
            value={this.props.value}
            onChange={e => this.handleTitleInput(e)}
            margin="normal"
          />
        </div>
        <div className="TodoAddForm__Submit">
          <Button variant="outlined" disabled={!this.props.value.length}>
            Add
          </Button>
        </div>
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
