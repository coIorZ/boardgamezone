import { combineReducers } from 'redux';
import { handleActions, handleAction } from 'redux-actions';

import { ADD_TODO, TOGGLE_TODO, SET_FILTER, SET_KEYWORD } from './types';

const todosReducer = handleActions({
  [ADD_TODO]: (state, { payload }) => {
    const id = ++Object.keys(state).length;
    return {
      ...state,
      [id]: {
        id,
        title : payload,
        done  : false,
      },
    };
  },
  [TOGGLE_TODO]: (state, { payload }) => ({
    ...state,
    [payload]: {
      ...state[payload],
      done: !state[payload].done,
    },
  }),
}, {});

const filterReducer = handleAction(SET_FILTER, (state, { payload }) => payload, 'ALL');
const keywordReducer = handleAction(SET_KEYWORD, (state, { payload }) => payload, '');

export default combineReducers({
  todos   : todosReducer,
  filter  : filterReducer,
  keyword : keywordReducer,
});
