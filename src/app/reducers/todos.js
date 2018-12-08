import { ADD_TODO, EDIT_TODO, DELETE_TODO } from '../actions/todos';

const initialState = {
  items: [],
};

export function todos(state = initialState, action) {
  switch (action.type) {
  case ADD_TODO: {
    const todo = {
      id: guid(),
      title: action.title,
      completed: false,
    };
    const items = [...state.items, todo];
    return newState(state, { items });
  }
  case EDIT_TODO: {
    const index = state.items.findIndex(i => i.id === action.id);
    const todo = {
      ...state.items.find(i => i.id === action.id),
      title: action.title,
    };
    const items = [...state.items];
    items.splice(index, 1, todo);
    return newState(state, { items });
  }
  case DELETE_TODO: {
    const index = state.items.findIndex(i => i.id === action.id);
    const items = [...state.items];
    items.splice(index, 1);
    return newState(state, { items });
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

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return (
    s4() +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    s4() +
    s4()
  );
}
