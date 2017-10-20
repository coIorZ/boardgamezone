import { createAction } from 'redux-actions';

import {
  SET_LOGGED_USER,
} from './types.js';

export const setLoggedUser = createAction(SET_LOGGED_USER);