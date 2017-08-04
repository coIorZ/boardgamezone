import { Subject } from 'rxjs';
import { ActionsObservable } from 'redux-observable';

export default ({ setup, test, expect }) => new Promise(resolve => {
  const input$ = new Subject();
  const action$ = new ActionsObservable(input$);
  setup(action$).toArray().subscribe(resolve);
  test(input$);
}).then(expect);
