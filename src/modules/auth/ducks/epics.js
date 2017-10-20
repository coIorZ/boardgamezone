import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';

import {
  LOG_IN, SIGN_UP,
} from './types';

import {
  setLoggedUser,
} from './../../global/ducks/actions';

const signUpEpic = (action$, store, ajaxDep = ajax) =>
  action$.ofType(SIGN_UP)
    .switchMap(({ payload }) => {
      return ajaxDep.post('/api/auth/register', payload)
        .pluck('response')
        .mapTo({ type: 'what' })
        .catch(() => Observable.empty());
    });
  
const logInEpic = (action$, store, ajaxDep = ajax) =>
  action$.ofType(LOG_IN)
    .switchMap(({ payload }) => {
      return ajaxDep.post('/api/auth/login', payload)
        .pluck('response')
        .map(setLoggedUser)
        .catch(() => Observable.empty());
    });

export default combineEpics(
  signUpEpic,
  logInEpic,
);