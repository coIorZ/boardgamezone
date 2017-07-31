import { filter } from 'lodash';
import { createSelector } from 'reselect';

const s = f => state => f(state['example']);

export const getTodos = s(state => state.todos);
export const getFilter = s(state => state.filter);
export const getKeyword = s(state => state.keyword);
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
const _getKeywordTodos = (todos, keyword) => 
  keyword ? filter(todos, todo => todo.title.includes(keyword)) : todos;
export const getKeywordTodos = createSelector(getTodos, getKeyword, _getKeywordTodos);
