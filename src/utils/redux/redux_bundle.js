import React, { Component } from 'react';
import { combineReducers, createStore } from 'redux';

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

export function bundle(module, name) {
  return (
    <Bundle load={{ module }}>
      {({ module }) => {
        injectReducer(module.ducks);
        const Page = module[name];
        return Page && <Page/>;
      }}
    </Bundle>
  );
}

export class Bundle extends Component {
  state = {
    isLoaded : false,
    mods     : null
  }

  componentDidMount() {
    this._isMounted = true;
    this.load();
  }

  componentDidUpdate(prevProps) {
    const shouldLoad = !!Object.keys(this.props.load).filter((key) => {
      return this.props.load[key] !== prevProps.load[key];
    }).length;
    if(shouldLoad) {
      this.load();
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  load() {
    this.setState({
      isLoaded: false
    });

    const { load } = this.props;
    const keys = Object.keys(load);

    Promise.all(keys.map(key => load[key]))
      .then((values) => keys.reduce((memo, key, index) => {
        memo[key] = values[index].default ? values[index].default : values[index];
        //memo[key] = values[index];
        return memo;
      }, {}))
      .then((result) => {
        if(!this._isMounted) return null;
        this.setState({
          isLoaded : true,
          mods     : result
        });
      });
  }

  render() {
    const { isLoaded, mods } = this.state;
    return isLoaded ? React.Children.only(this.props.children(mods)) : null;
  }
}
