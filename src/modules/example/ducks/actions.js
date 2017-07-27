import { createAction } from 'redux-actions';

import types from './types';

export const addTodo = createAction(types.ADD_TODO);
export const toggleTodo = createAction(types.TOGGLE_TODO);
export const setFilter = createAction(types.SET_FILTER);

export default {
  addTodo,
  toggleTodo,
  setFilter,
};
