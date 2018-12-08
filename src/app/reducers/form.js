import { EDIT_FORM, CLEAR_FORM } from '../actions/form';

const initialState = {
  value: '',
};

export function form(state = initialState, action) {
  switch (action.type) {
  case EDIT_FORM: {
    return newState(state, { value: action.value });
  }
  case CLEAR_FORM: {
    return newState(state, { value: '' });
  }
  default: {
    return state;
  }
  }
}

function newState(state, data) {
  return {
    ...state,
    ...data,
  };
}
