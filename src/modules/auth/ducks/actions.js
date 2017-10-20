import { createAction } from 'redux-actions';

import {
  LOG_IN, SIGN_UP,
} from './types';

export const logIn = createAction(LOG_IN);
export const signUp = createAction(SIGN_UP);