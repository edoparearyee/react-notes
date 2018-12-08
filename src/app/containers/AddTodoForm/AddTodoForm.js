import { connect } from 'react-redux';
import { addTodo } from '../../actions/todos';
import { editForm, clearForm } from '../../actions/form';

import AddTodoForm from '../../components/AddTodoForm/AddTodoForm';

const mapStateToProps = state => {
  return {
    value: state.form.value,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAdd: ({ title }) => {
      dispatch(addTodo(title));
      dispatch(clearForm());
    },
    onInput: ({ value }) => {
      dispatch(editForm(value));
    },
  };
};

const AddTodoFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddTodoForm);

export default AddTodoFormContainer;
