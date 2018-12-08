import { connect } from 'react-redux';
import { editTodo } from '../../actions/todos';

import TodoList from '../../components/TodoList/TodoList';

const mapStateToProps = state => {
  return {
    items: state.todos.items,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: ({ id, title }) => {
      dispatch(editTodo(id, title));
    },
  };
};

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default TodoListContainer;
