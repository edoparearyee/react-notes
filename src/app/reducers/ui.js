import { SIDEBAR_MOBILE_OPEN, SIDEBAR_MOBILE_CLOSE } from '../actions/ui';
import newState from '../utils/new-state';

const initialState = {
  sidebar: {
    mobileOpen: false,
  },
};

export function ui(state = initialState, action) {
  switch (action.type) {
    case SIDEBAR_MOBILE_OPEN: {
      return newState(state, {
        sidebar: {
          mobileOpen: true,
        },
      });
    }

    case SIDEBAR_MOBILE_CLOSE: {
      return newState(state, {
        sidebar: {
          mobileOpen: false,
        },
      });
    }

    default: {
      return state;
    }
  }
}
