import { filter } from 'lodash';
import { combineReducers } from 'redux';
import { createAction, handleActions, handleAction } from 'redux-actions';
import { createSelector } from 'reselect';

export const MODULE_NAME = 'example';

let TODO_ID = 1;

/*
actions
*/
const ADD_TODO = `bgz/${MODULE_NAME}/ADD_TODO`;
const TOGGLE_TODO = `bgz/${MODULE_NAME}/TOGGLE_TODO`;
const SET_FILTER = `bgz/${MODULE_NAME}/SET_FILTER`;

export const addTodo = createAction(ADD_TODO);
export const toggleTodo = createAction(TOGGLE_TODO);
export const setFilter = createAction(SET_FILTER);


/*
reducers
*/
const todosReducer = handleActions({
  [ADD_TODO]: (state, { payload }) => ({
    ...state,
    [TODO_ID]: {
      id    : TODO_ID++,
      title : payload,
      done  : false
    }
  }),
  [TOGGLE_TODO]: (state, { payload }) => ({
    ...state,
    [payload]: {
      ...state[payload],
      done: !state[payload].done
    }
  })
}, {});

const filterReducer = handleAction(SET_FILTER, (state, { payload }) => payload, 'ALL');

export default {
  [MODULE_NAME]: combineReducers({
    todos  : todosReducer,
    filter : filterReducer
  })
};


/*
selectors
*/
export const getTodos = state => state[MODULE_NAME].todos;
export const getFilter = state => state[MODULE_NAME].filter;
const _getFilteredTodos = (todos, filterStr) => {
  switch (filterStr) {
    case 'COMPLETED':
      return filter(todos, todo => todo.done);
    case 'ACTIVE':
      return filter(todos, todo => !todo.done);
    default:
      return todos;
  }
};
export const getFilteredTodos = createSelector(getTodos, getFilter, _getFilteredTodos);
export const getActiveTodos = createSelector(getTodos, todos => filter(todos, todo => !todo.done));
