import { combineEpics } from 'redux-observable';

import { EDIT_KEYWORD } from './types';
import { setKeyword } from './actions';

const getKeywordEpic = debounceTime => action$ => 
  action$.ofType(EDIT_KEYWORD)
    .map(({ payload }) => payload)
    .debounceTime(debounceTime)
    .distinctUntilChanged()
    .map(value => setKeyword(value));

const keywordEpic = getKeywordEpic(500);

export default combineEpics(
  keywordEpic,
);
