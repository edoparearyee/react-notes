export const EDIT_FORM = '[FORM] edit';
export const CLEAR_FORM = '[FORM] clear';

export function editForm(value) {
  return { type: EDIT_FORM, value };
}

export function clearForm() {
  return { type: CLEAR_FORM };
}
