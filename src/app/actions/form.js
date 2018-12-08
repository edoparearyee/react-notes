export const FORM_EDIT = '[FORM] Edit';
export const FORM_CLEAR = '[FORM] Clear';

export function formEdit(value) {
  return { type: FORM_EDIT, value };
}

export function formClear() {
  return { type: FORM_CLEAR };
}
