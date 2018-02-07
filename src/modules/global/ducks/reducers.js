import { combineReducers } from 'redux';
import { handleAction } from 'redux-actions';

import {
  SET_LOGGED_USER,
} from './types.js';

const loggedUserReducer = handleAction(SET_LOGGED_USER, (state, { payload }) => payload, null);

export default combineReducers({
  global: combineReducers({
    loggedUser: loggedUserReducer,
  }),
});

