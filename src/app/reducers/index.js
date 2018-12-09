import { combineReducers } from 'redux';

import { todos } from './todos';
import { form } from './form';

export const rootReducer = combineReducers({ todos, form });
