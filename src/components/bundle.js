import React, { Component } from 'react';

export default class Bundle extends Component {
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

    Promise.all(keys.map(key => promisify(load[key])()))
      .then((values) => keys.reduce((memo, key, index) => {
        memo[key] = values[index].default ? values[index].default : values[index];
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

function promisify(loader) {
  return () => new Promise((resolve, reject) => {
    loader((result) => {
      if(result) return resolve(result);
      reject();
    });
  });
}
