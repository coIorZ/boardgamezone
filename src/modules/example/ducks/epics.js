import { combineEpics } from 'redux-observable';

import { SET_KEYWORD_DEBOUNCED } from './types';
import { setKeyword } from './actions';

const keywordEpic = action$ => 
  action$.ofType(SET_KEYWORD_DEBOUNCED)
    .map(action => action.payload)
    .debounceTime(500)
    .distinctUntilChanged()
    .map(setKeyword);

export default combineEpics(
  keywordEpic
);
