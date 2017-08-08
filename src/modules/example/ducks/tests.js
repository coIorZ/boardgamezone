import React from 'react';
import renderer from 'react-test-renderer';

import { testEpic, mock } from '../../../utils/test_helper';
import { editKeyword, setKeyword, addTodo, toggleTodo, setFilter } from './actions';
import reducers from './reducers';
import { getTodos, getFilteredTodos, getKeywordTodos } from './selectors';
import epics from './epics';
import { TodoList } from '../containers/todo_list';
import { PostList } from '../containers/post_list';

const { mockState, mockStore } = mock({
  todos   : {},
  filter  : 'ALL',
  keyword : '',
}, 'example');

describe('# example module', () => {
  describe('reducers', () => {
    it('should match its initial state', () => {
      expect(reducers(undefined, {})).toEqual(mockState());
    });

    describe('todosReducer()', () => {
      it('should add some todos', () => {
        let state = reducers(mockState(), addTodo('first todo'));
        expect(state).toMatchSnapshot();
        state = reducers(state, addTodo('second todo'));
        expect(state).toMatchSnapshot();
      });

      it('should toggle a todo', () => {
        let state = mockState({
          todos: {
            1: { id: 1, title: 'first todo', done: false },
          },
        });
        expect(state).toMatchSnapshot();
        state = reducers(state, toggleTodo(1));
        expect(state).toMatchSnapshot();
      });
    });

    describe('filterReducer()', () => {
      it('should set filter', () => {
        let state = reducers(mockState(), setFilter('COMPLETED'));
        expect(state).toMatchSnapshot();
      });
    });

    describe('keywordReducer()', () => {
      it('should set keyword', () => {
        let state = reducers(mockState(), setKeyword('todo'));
        expect(state).toMatchSnapshot();
      });
    });
  });

  describe('selectors', () => {
    const store = mockStore({
      todos: {
        1 : { id: 1, title: 'another todo', done: false },
        2 : { id: 2, title: 'yet another todo', done: true },
      },
      filter  : 'COMPLETED',
      keyword : 'ye',
    });

    describe('getTodos()', () => {
      it('should get all todos', () => {
        expect(getTodos(store)).toMatchSnapshot();
      });
    });

    describe('getFilteredTodos()', () => {
      it('should get all todos', () => {
        const store = mockStore({
          todos: {
            1 : { id: 1, title: 'another todo', done: false },
            2 : { id: 2, title: 'yet another todo', done: true },
          },
          filter  : 'ALL',
          keyword : 'ye',
        });
        expect(getFilteredTodos(store)).toMatchSnapshot();
      });

      it('should get completed todos', () => {
        expect(getFilteredTodos(store)).toMatchSnapshot();
      });

      it('should get active todos', () => {
        const store = mockStore({
          todos: {
            1 : { id: 1, title: 'another todo', done: false },
            2 : { id: 2, title: 'yet another todo', done: true },
          },
          filter  : 'ACTIVE',
          keyword : 'ye',
        });
        expect(getFilteredTodos(store)).toMatchSnapshot();
      });
    });

    describe('getKeywordTodos()', () => {
      it('should get todos by keyword', () => {
        expect(getKeywordTodos(store)).toMatchSnapshot();
      });

      it('should get all todos when keyword is empty', () => {
        const store = mockStore({
          todos: {
            1 : { id: 1, title: 'another todo', done: false },
            2 : { id: 2, title: 'yet another todo', done: true },
          },
          filter  : 'ACTIVE',
          keyword : '',
        });
        expect(getKeywordTodos(store)).toMatchSnapshot();
      });
    });
  });

  describe('epics', () => {
    describe('keywordEpic()', () => {
      it('should dispatch correct actions when interval > 500 with distinct values', () => testEpic({
        setup(action$) {
          return epics(action$);
        },
        test(input$) {
          input$.next(editKeyword('12'));
          setTimeout(() => {
            input$.next(editKeyword('123'));
            input$.complete();
          }, 510);
        },
        expect(actions) {
          expect(actions).toEqual([
            setKeyword('12'),
            setKeyword('123'),
          ]);
        },
      }));

      it('should dispatch correct actions when interval > 500 with same values', () => testEpic({
        setup(action$) {
          return epics(action$);
        },
        test(input$) {
          input$.next(editKeyword('12'));
          setTimeout(() => {
            input$.next(editKeyword('12'));
            input$.complete();
          }, 510);
        },
        expect(actions) {
          expect(actions).toEqual([
            setKeyword('12'),
          ]);
        },
      }));

      it('should dispatch correct actions when interval < 500', () => testEpic({
        setup(action$) {
          return epics(action$);
        },
        test(input$) {
          input$.next(editKeyword('12'));
          input$.next(editKeyword('123'));
          setTimeout(() => {
            input$.next(editKeyword('1234'));
            input$.complete();
          }, 490);
        },
        expect(actions) {
          expect(actions).toEqual([
            setKeyword('1234'),
          ]);
        },
      }));
    });
  });

  describe('views', () => {
    describe('<TodoList/>', () => {
      it('should match its empty snapshot', () => {
        const tree = renderer.create(
          <TodoList/>,
        ).toJSON();
        expect(tree).toMatchSnapshot();
      });

      it('should match its snapshot with todos', () => {
        const todos = {
          1 : { id: 1, title: 'hello world', done: false },
          2 : { id: 2, title: 'another world', done: true },
        };
        const tree = renderer.create(
          <TodoList todos={todos}/>,
        ).toJSON();
        expect(tree).toMatchSnapshot();
      });
    });

    describe('<PostList/>', () => {
      it('should match its empty snapshot', () => {
        const tree = renderer.create(
          <PostList/>,
        ).toJSON();
        expect(tree).toMatchSnapshot();
      });

      it('should match its snapshot with todos', () => {
        const todos = {
          1 : { id: 1, title: 'hello world', done: false },
          2 : { id: 2, title: 'another world', done: true },
        };
        const tree = renderer.create(
          <PostList todos={todos}/>,
        ).toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
