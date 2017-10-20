import { combineEpics } from 'redux-observable';
import * as Rx from 'rxjs';

export const epic$ = new Rx.BehaviorSubject(combineEpics());
export default (action$, store) => 
  epic$.mergeMap(epic => epic(action$, store));
