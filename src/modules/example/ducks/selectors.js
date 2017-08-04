import { filter } from 'lodash';
import { createSelector } from 'reselect';

const s = f => state => f(state['example']);

export const getTodos = s(state => state.todos);
export const getFilter = s(state => state.filter);
export const getKeyword = s(state => state.keyword);
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
