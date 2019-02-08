import { todos as reducer } from './todos';
import * as actions from '../actions/todos';
import expect from 'expect';

describe('todos reducer', () => {
  it('should return the initial state', () => {
    const expected = {
      items: [],
    };
    const result = reducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should handle TODO_ADD', () => {
    const state = {
      items: [],
    };
    const expectedLength = 1;
    const expectedTitle = 'foo';
    const expectedComplete = false;
    const action = actions.todoAdd('foo');
    const result = reducer(state, action);
    expect(result.items.length).toBe(expectedLength);
    expect(result.items[0].id).toEqual(expect.any(String));
    expect(result.items[0].title).toBe(expectedTitle);
    expect(result.items[0].complete).toBe(expectedComplete);
  });

  it('should handle TODO_EDIT', () => {
    const state = {
      items: [
        {
          id: '123',
          title: 'foo',
          complete: false,
        },
      ],
    };
    const expected = {
      items: [
        {
          id: '123',
          title: 'bar',
          complete: false,
        },
      ],
    };
    const action = actions.todoEdit('123', 'bar');
    const result = reducer(state, action);
    expect(result).toEqual(expected);
  });

  it('should handle TODO_DELETE', () => {
    const state = {
      items: [
        {
          id: '123',
          title: 'foo',
          complete: false,
        },
        {
          id: '456',
          title: 'bar',
          complete: true,
        },
        {
          id: '789',
          title: 'bat',
          complete: true,
        },
      ],
    };
    const expected = {
      items: [
        {
          id: '123',
          title: 'foo',
          complete: false,
        },
        {
          id: '789',
          title: 'bat',
          complete: true,
        },
      ],
    };
    const action = actions.todoDelete('456');
    const result = reducer(state, action);
    expect(result).toEqual(expected);
  });

  it('should handle TODO_TOGGLE', () => {
    const state = {
      items: [
        {
          id: '123',
          title: 'foo',
          complete: false,
        },
      ],
    };
    const expected = {
      items: [
        {
          id: '123',
          title: 'foo',
          complete: true,
        },
      ],
    };
    const action = actions.todoToggle('123');
    const result = reducer(state, action);
    expect(result).toEqual(expected);
  });
});
