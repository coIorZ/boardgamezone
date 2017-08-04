import { createAction } from 'redux-actions';

import { 
  ADD_TODO, TOGGLE_TODO, SET_FILTER, 
  SET_KEYWORD, EDIT_KEYWORD, 
} from './types';

export const addTodo = createAction(ADD_TODO);
export const toggleTodo = createAction(TOGGLE_TODO);
export const setFilter = createAction(SET_FILTER);
export const setKeyword = createAction(SET_KEYWORD);
export const editKeyword = createAction(EDIT_KEYWORD);
