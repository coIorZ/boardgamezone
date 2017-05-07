import React from 'react';
import { combineReducers, createStore } from 'redux';

import Bundle from 'components/bundle';

let store;

export function injectReducer(reducer) {
  store.reducers = {
    ...store.reducers,
    ...reducer
  };
  store.replaceReducer(combineReducers(store.reducers));
}

function _createStore(...args) {
  store = createStore.apply(this, args);
  store.reducers = {};
  return store;
}
export { _createStore as createStore };

export function createBundle(reducer) {
  return (Loader) => () => (
    <Bundle load={{ reducer, Loader }}>
      {({ reducer, Loader }) => {
        injectReducer(reducer);
        return <Loader/>;
      }}
    </Bundle>
  );
}
