import { Subject } from 'rxjs';
import { ActionsObservable } from 'redux-observable';

export const testEpic = ({ setup, test, expect }) => new Promise(resolve => {
  const input$ = new Subject();
  const action$ = new ActionsObservable(input$);
  setup(action$).toArray().subscribe(resolve);
  test(input$);
}).then(expect);

export const mock = (initialState, name) => {
  const mockState = updateState => ({
    ...initialState,
    ...updateState,
  });
  const mockStore = (...args) => ({
    [name]: mockState(...args),
  });
  return { mockState, mockStore };
};