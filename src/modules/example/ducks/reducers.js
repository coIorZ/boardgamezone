import { combineReducers } from 'redux';
import { handleActions, handleAction } from 'redux-actions';

import types from './types';

let TODO_ID = 1;

const todosReducer = handleActions({
  [types.ADD_TODO]: (state, { payload }) => ({
    ...state,
    [TODO_ID]: {
      id    : TODO_ID++,
      title : payload,
      done  : false
    }
  }),
  [types.TOGGLE_TODO]: (state, { payload }) => ({
    ...state,
    [payload]: {
      ...state[payload],
      done: !state[payload].done
    }
  })
}, {});

const filterReducer = handleAction(types.SET_FILTER, (state, { payload }) => payload, 'ALL');

export default combineReducers({
  todos  : todosReducer,
  filter : filterReducer
});
