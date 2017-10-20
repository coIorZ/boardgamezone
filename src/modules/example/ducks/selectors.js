import { filter } from 'lodash';
import { createSelector } from 'reselect';

export const getTodos = state => state.example.todos;
export const getFilter = state => state.example.filter;
export const getKeyword = state => state.example.keyword;
export const getFilteredTodos = createSelector(
  getTodos,
  getFilter,
  (todos, filterStr) => {
    switch (filterStr) {
      case 'COMPLETED':
        return filter(todos, todo => todo.done);
      case 'ACTIVE':
        return filter(todos, todo => !todo.done);
      default:
        return todos;
    }
  },
);
export const getKeywordTodos = createSelector(
  getTodos,
  getKeyword,
  (todos, keyword) =>
    keyword ? filter(todos, todo => todo.title.includes(keyword)) : todos,
);
