import { form as reducer } from './form';
import * as actions from '../actions/form';
import expect from 'expect';

describe('form reducer', () => {
  it('should return the initial state', () => {
    const expected = {
      value: '',
    };
    const result = reducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should handle FORM_INPUT', () => {
    const state = {
      value: '',
    };
    const expected = {
      value: 'foo',
    };
    const action = actions.formInput('foo');
    const result = reducer(state, action);
    expect(result).toEqual(expected);
  });

  it('should handle FORM_CLEAR', () => {
    const state = {
      value: 'foo',
    };
    const expected = {
      value: '',
    };
    const action = actions.formClear();
    const result = reducer(state, action);
    expect(result).toEqual(expected);
  });
});
