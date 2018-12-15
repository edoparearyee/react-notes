import { combineReducers } from 'redux';

import { todos } from './todos';
import { form } from './form';
import { contributors } from './contributors';

export const rootReducer = combineReducers({ todos, form, contributors });
