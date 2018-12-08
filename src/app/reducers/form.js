import { FORM_EDIT, FORM_CLEAR } from '../actions/form';
import newState from '../utils/new-state';

const initialState = {
  value: '',
};

export function form(state = initialState, action) {
  switch (action.type) {
    case FORM_EDIT: {
      return newState(state, { value: action.value });
    }
    case FORM_CLEAR: {
      return newState(state, { value: '' });
    }
    default: {
      return state;
    }
  }
}
