import React, { Component } from 'react';
//import '@material/toolbar/dist/mdc.toolbar.min.css';

export default class Toolbar extends Component {
  render() {
    const {
      height,
      title = ''
    } = this.props;

    return (
      <header>
        <div className='mdc-toolbar mdc-toolbar--fixed'
            style={{ height }}>
          <div className='mdc-toolbar__row'>
            <section className='mdc-toolbar__section mdc-toolbar__section--align-start'>
              <span style={{ paddingRight: 24 }}>
                <i className='material-icons'>menu</i>
              </span>
              <span className='mdc-toolbar__title'>{title}</span>
            </section>
          </div>
        </div>
        <div className='mdc-toolbar-fixed-adjust'>
          {this.props.children}
        </div>
      </header>
    );
  }
}

export function withToolbar(Comp, { height, title = '' } = {}) {
  return class extends Component {
    render() {
      return (
        <header>
          <div className='mdc-toolbar mdc-toolbar--fixed'
              style={{ height }}>
            <div className='mdc-toolbar__row'>
              <section className='mdc-toolbar__section mdc-toolbar__section--align-start'>
                <span style={{ paddingRight: 24 }}>
                  <i className='material-icons'>menu</i>
                </span>
                <span className='mdc-toolbar__title'>{title}</span>
              </section>
            </div>
          </div>
          <div className='mdc-toolbar-fixed-adjust'>
            <Comp {...this.props}/>
          </div>
        </header>
      );
    }
  };
}
