import { combineReducers } from 'redux';

import { todos } from './todos';
import { form } from './form';
import { contributors } from './contributors';
import { ui } from './ui';

export const rootReducer = combineReducers({ todos, form, contributors, ui });
