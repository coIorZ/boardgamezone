import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import testEpic from '../../../utils/test_epic';
import { editKeyword, setKeyword, addTodo, toggleTodo, setFilter } from './actions';
import reducers from './reducers';
import { getTodos, getFilteredTodos, getKeywordTodos } from './selectors';
import epics from './epics';
import { TodoList } from '../containers/todo_list';
//import TodoItem from '../components/todo_item';

const createState = ({
  todos = {},
  filter = 'ALL',
  keyword = '',
} = {}) => ({ todos, filter, keyword });

const createStore = (...args) => ({
  example: createState(...args),
});

describe('# example module', () => {
  describe('reducers', () => {
    it('should match its initial state', () => {
      expect(reducers(undefined, {})).toEqual(createState());
    });

    describe('todosReducer()', () => {
      it('should add some todos', () => {
        let state = reducers(createState(), addTodo('first todo'));
        expect(state).toMatchSnapshot();
        state = reducers(state, addTodo('second todo'));
        expect(state).toMatchSnapshot();
      });

      it('should toggle a todo', () => {
        let state = createState({
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
        let state = reducers(createState(), setFilter('COMPLETED'));
        expect(state).toMatchSnapshot();
      });
    });

    describe('keywordReducer()', () => {
      it('should set keyword', () => {
        let state = reducers(createState(), setKeyword('todo'));
        expect(state).toMatchSnapshot();
      });
    });
  });

  describe('selectors', () => {
    const store = createStore({
      todos: {
        1 : { id: 1, title: 'another todo', done: false },
        2 : { id: 2, title: 'yet another todo', done: true },
      },
      filter  : 'COMPLETED',
      keyword : 'ye',
    });

    describe('getTodos()', () => {
      it('should get todos', () => {
        expect(getTodos(store)).toMatchSnapshot();
      });
    });

    describe('getFilteredTodos()', () => {
      it('should get filtered todos', () => {
        expect(getFilteredTodos(store)).toMatchSnapshot();
      });
    });

    describe('getKeywordTodos()', () => {
      it('should get todos by keyword', () => {
        expect(getKeywordTodos(store)).toMatchSnapshot();
      });
    });
  });

  describe('epics', () => {
    describe('keywordEpic()', () => {
      it('should dispatch correct actions when interval > 500 with distinct values', () => testEpic({
        setup: action$ => {
          return epics(action$);
        },
        test: input$ => {
          input$.next(editKeyword('12'));
          setTimeout(() => {
            input$.next(editKeyword('123'));
            input$.complete();
          }, 510);
        },
        expect: actions => {
          expect(actions).toEqual([
            setKeyword('12'),
            setKeyword('123'),
          ]);
        },
      }));

      it('should dispatch correct actions when interval > 500 with same values', () => testEpic({
        setup: action$ => {
          return epics(action$);
        },
        test: input$ => {
          input$.next(editKeyword('12'));
          setTimeout(() => {
            input$.next(editKeyword('12'));
            input$.complete();
          }, 510);
        },
        expect: actions => {
          expect(actions).toEqual([
            setKeyword('12'),
          ]);
        },
      }));

      it('should dispatch correct actions when interval < 500', () => testEpic({
        setup: action$ => {
          return epics(action$);
        },
        test: input$ => {
          input$.next(editKeyword('12'));
          input$.next(editKeyword('123'));
          setTimeout(() => {
            input$.next(editKeyword('1234'));
            input$.complete();
          }, 490);
        },
        expect: actions => {
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
        const tree = shallow(<TodoList/>);
        expect(toJson(tree)).toMatchSnapshot();
      });

      it('should match its snapshot with todos', () => {
        const todos = {
          1 : { id: 1, title: 'hello world', done: false },
          2 : { id: 2, title: 'another world', done: true },
        };
        const tree = shallow(<TodoList todos={todos}/>);
        expect(toJson(tree)).toMatchSnapshot();
      });
    });
  });
});
