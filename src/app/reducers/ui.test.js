import { ui as reducer } from './ui';
import * as actions from '../actions/ui';
import expect from 'expect';

describe('UI reducer', () => {
  it('should return the initial state', () => {
    const expected = {
      sidebar: {
        mobileOpen: false,
      },
    };
    const result = reducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should handle SIDEBAR_MOBILE_OPEN', () => {
    const state = {
      sidebar: {
        mobileOpen: false,
      },
    };
    const expected = {
      sidebar: {
        mobileOpen: true,
      },
    };
    const action = actions.sidebarOpen();
    const result = reducer(state, action);
    expect(result).toEqual(expected);
  });

  it('should handle SIDEBAR_MOBILE_CLOSE', () => {
    const state = {
      sidebar: {
        mobileOpen: true,
      },
    };
    const expected = {
      sidebar: {
        mobileOpen: false,
      },
    };
    const action = actions.sidebarClose();
    const result = reducer(state, action);
    expect(result).toEqual(expected);
  });
});
