import { combineEpics } from 'redux-observable';

import types from './types';

const filterEpic = action$ => 
  action$.ofType(types.SET_FILTER_ASYNC)
    .delay(1000)
    .map(action => ({
      type    : types.SET_FILTER,
      payload : action.payload
    }));

export default combineEpics(
  filterEpic
);
