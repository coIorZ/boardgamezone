import React, { Component } from 'react';
import { combineReducers } from 'redux';

import store from '../store';
import { epic$ } from '../epic';

let reducers = {};
let loaded = [];

function injectReducer(name, reducer) {
  if(Object.keys(reducers).includes(name)) return;
  reducers = {
    ...reducers,
    [name]: reducer,
  };
  store.replaceReducer(combineReducers(reducers));
}

function injectEpic(epic) {
  epic$.next(epic);
}

function injectDep({ reducers, epics, __name__ } = {}) {
  if(loaded.includes(__name__)) return;
  loaded.push(__name__);
  injectReducer(__name__, reducers);
  injectEpic(epics);
}

export function bundle(module, { name }) {
  return props => (
    <Bundle load={{ module }}>
      {({ module }) => {
        injectDep(module);
        const Page = module[name];
        return Page ? <Page {...props}/> : null;
      }}
    </Bundle>
  );
}

export class Bundle extends Component {
  state = {
    isLoaded : false,
    mods     : null,
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
      isLoaded: false,
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
          mods     : result,
        });
      });
  }

  render() {
    const { isLoaded, mods } = this.state;
    return isLoaded ? React.Children.only(this.props.children(mods)) : null;
  }
}
