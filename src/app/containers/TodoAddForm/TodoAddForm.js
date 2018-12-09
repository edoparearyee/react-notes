import { connect } from 'react-redux';
import { todoAdd } from '../../actions/todos';
import { formInput, formClear } from '../../actions/form';

import TodoAddForm from '../../components/TodoAddForm/TodoAddForm';

const mapStateToProps = state => {
  return {
    value: state.form.value,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAdd: ({ title }) => {
      dispatch(todoAdd(title));
      dispatch(formClear());
    },
    onInput: ({ value }) => {
      dispatch(formInput(value));
    },
  };
};

const TodoAddFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoAddForm);

export default TodoAddFormContainer;
