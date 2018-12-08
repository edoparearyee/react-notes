import {
  TODO_ADD,
  TODO_EDIT,
  TODO_DELETE,
  TODO_TOGGLE,
} from '../actions/todos';
import newState from '../utils/new-state';
import guid from '../utils/guid';

const initialState = {
  items: [],
};

export function todos(state = initialState, action) {
  switch (action.type) {
    case TODO_ADD: {
      const todo = {
        id: guid(),
        title: action.title,
        complete: false,
      };
      const items = [...state.items, todo];
      return newState(state, { items });
    }

    case TODO_EDIT: {
      const index = state.items.findIndex(i => i.id === action.id);
      const todo = state.items.find(i => i.id === action.id);
      const updatedTodo = {
        ...todo,
        title: action.title,
      };
      const items = [...state.items];
      items.splice(index, 1, updatedTodo);
      return newState(state, { items });
    }

    case TODO_DELETE: {
      const index = state.items.findIndex(i => i.id === action.id);
      const items = [...state.items];
      items.splice(index, 1);
      return newState(state, { items });
    }

    case TODO_TOGGLE: {
      const index = state.items.findIndex(i => i.id === action.id);
      const todo = state.items.find(i => i.id === action.id);
      const updatedTodo = {
        ...todo,
        complete: !todo.complete,
      };
      const items = [...state.items];
      items.splice(index, 1, updatedTodo);
      return newState(state, { items });
    }

    default: {
      return state;
    }
  }
}
