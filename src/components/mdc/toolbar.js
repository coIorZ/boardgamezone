import React, { Component } from 'react';

export default class Toolbar extends Component {
  render() {
    const {
      height = 56,
      title = ''
    } = this.props;

    return (
      <div>
        <header className='mdc-toolbar mdc-toolbar--fixed'
            style={{ height }}>
          <div className='mdc-toolbar__row'>
            <section className='mdc-toolbar__section mdc-toolbar__section--align-start'>
              <span style={{ paddingRight: 24 }}>
                <i className='material-icons'>menu</i>
              </span>
              <span className='mdc-toolbar__title'>{title}</span>
            </section>
          </div>
        </header>
        <div className='mdc-toolbar-fixed-adjust'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export function withToolbar(Comp, props = {}) {
  return class extends Component {
    render() {
      return (
        <Toolbar {...props}>
          <Comp {...this.props}/>
        </Toolbar>
      );
    }
  };
}
