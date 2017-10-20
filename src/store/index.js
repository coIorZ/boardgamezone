import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import reducer from 'modules/global/ducks/reducers';
import epic from './epic';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epicMiddleware = createEpicMiddleware(epic);

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(
    epicMiddleware,
  )),
); 

export default store;
