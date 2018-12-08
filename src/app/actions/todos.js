export const ADD_TODO = '[TODOS] add';
export const EDIT_TODO = '[TODOS] edit';
export const DELETE_TODO = '[TODOS] delete';

export function addTodo(title) {
  return { type: ADD_TODO, title };
}

export function editTodo(id, title) {
  return { type: EDIT_TODO, id, title };
}

export function deleteTodo(id) {
  return { type: DELETE_TODO, id };
}
