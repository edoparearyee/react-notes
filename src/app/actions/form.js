export const FORM_INPUT = '[FORM] Input';
export const FORM_CLEAR = '[FORM] Clear';

export function formInput(value) {
  return { type: FORM_INPUT, value };
}

export function formClear() {
  return { type: FORM_CLEAR };
}
