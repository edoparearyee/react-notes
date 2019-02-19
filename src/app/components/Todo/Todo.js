import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import './Todo.scss';

class Todo extends Component {
  render() {
    const todoClass = classNames({
      Todo: true,
      'Todo--Complete': this.props.complete,
    });
    return (
      <ListItem role="listitem" className={todoClass}>
        <Checkbox
          ref={c => (this._checkboxEl = c)}
          checked={this.props.complete}
          tabIndex={-1}
          disableRipple
          onChange={this.handleToggle.bind(this)}
        />
        <div
          className="Todo__Title"
          onInput={e => this.handleInput(e)}
          ref={c => (this._titleEl = c)}
          contentEditable={!this.props.complete}
          suppressContentEditableWarning={true}
        >
          <ListItemText primary={this.props.title} />
        </div>
        <ListItemSecondaryAction>
          <IconButton
            aria-label="Delete"
            onClick={e => this.handleDeleteClick(e)}
            className="Todo__Delete"
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
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
