import { connect } from 'react-redux';
import { todoEdit, todoToggle, todoDelete } from '../../actions/todos';

import TodoList from '../../components/TodoList/TodoList';

const mapStateToProps = state => {
  return {
    items: state.todos.items,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: ({ id, title }) => {
      dispatch(todoEdit(id, title));
    },
    onToggle: ({ id }) => {
      dispatch(todoToggle(id));
    },
    onDelete: ({ id }) => {
      dispatch(todoDelete(id));
    },
  };
};

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default TodoListContainer;
