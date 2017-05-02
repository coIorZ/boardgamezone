import React from 'react';
import { combineReducers, createStore } from 'redux';

import Bundle from 'components/bundle';
import Loading from 'components/loading';

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

export function createBundle(loadReducer) {
  return (loader) => () => (
    <Bundle load={loadReducer}>
      {(reducer) => {
        if(!reducer) return <Loading/>;
        injectReducer(reducer);
        return (
          <Bundle load={loader}>
            {(Page) => Page ? <Page/> : null}
          </Bundle>
        );
      }}
    </Bundle>
  );
}
