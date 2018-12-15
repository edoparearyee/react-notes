import {
  CONTRIBUTORS_LOAD,
  CONTRIBUTORS_LOAD_SUCCESS,
  CONTRIBUTORS_LOAD_FAIL,
  CONTRIBUTORS_CLEAR,
} from '../actions/contributors';
import newState from '../utils/new-state';

const initialState = {
  loading: false,
  items: [],
  error: null,
};

export function contributors(state = initialState, action) {
  switch (action.type) {
    case CONTRIBUTORS_LOAD: {
      return newState(state, { loading: true });
    }

    case CONTRIBUTORS_LOAD_SUCCESS: {
      return newState(state, { loading: false, items: action.contributors });
    }

    case CONTRIBUTORS_LOAD_FAIL: {
      return newState(state, { loading: false, error: action.error });
    }

    case CONTRIBUTORS_CLEAR: {
      return newState(state, initialState);
    }

    default: {
      return state;
    }
  }
}
