import { filter } from 'lodash';
import { createSelector } from 'reselect';

const s = f => state => f(state['example']);

export const getTodos = s(state => state.todos);
export const getFilter = s(state => state.filter);
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
