import { combineEpics } from 'redux-observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export const epic$ = new BehaviorSubject(combineEpics());
export default (action$, store) => 
  epic$.mergeMap(epic => epic(action$, store));
