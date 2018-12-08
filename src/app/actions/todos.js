export const TODO_ADD = '[TODO] Add';
export const TODO_EDIT = '[TODO] Edit';
export const TODO_DELETE = '[TODO] Delete';
export const TODO_TOGGLE = '[TODO] Toggle';

export function todoAdd(title) {
  return { type: TODO_ADD, title };
}

export function todoEdit(id, title) {
  return { type: TODO_EDIT, id, title };
}

export function todoDelete(id) {
  return { type: TODO_DELETE, id };
}

export function todoToggle(id) {
  return { type: TODO_TOGGLE, id };
}
