import { createAction } from 'redux-actions';

import { ADD_TODO, TOGGLE_TODO, SET_FILTER, SET_KEYWORD, SET_KEYWORD_DEBOUNCED } from './types';

export const addTodo = createAction(ADD_TODO);
export const toggleTodo = createAction(TOGGLE_TODO);
export const setFilter = createAction(SET_FILTER);
export const setKeyword = createAction(SET_KEYWORD);
export const setKeywordDebounced = createAction(SET_KEYWORD_DEBOUNCED);
