import React, { Component } from 'react';
import { drawer } from '../../../node_modules/material-components-web/dist/material-components-web.min';

export default class Drawer extends Component {
  static defaultProps = {
    onClose : () => {},
    onOpen  : () => {},
    active  : false,
    header  : null
  }

  state = {
    classes: new Set(['mdc-temporary-drawer'])
  }

  componentDidMount() {
    this.foundation.init();
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.active !== nextProps.active) {
      if(nextProps.active) {
        this.foundation.open();
      } else {
        this.foundation.close();
      }
    }
  }

  componentWillUnmount() {
    this.foundation.destroy();
  }

  foundation = new drawer.MDCTemporaryDrawerFoundation({
    addClass: className => this.setState(prevState => ({
      classes: prevState.classes.add(className)
    })),
    removeClass: className => this.setState(prevState => {
      prevState.classes.delete(className);
      return { classes: prevState.classes };
    }),
    registerInteractionHandler: (evt, handler) => {
      if(this.refs.root) {
        this.refs.root.addEventListener(evt, handler);
      }
    },
    deregisterInteractionHandler: (evt, handler) => {
      if(this.refs.root) {
        this.refs.root.addEventListener(evt, handler);
      }
    },
    registerDrawerInteractionHandler: (evt, handler) => {
      if(this.refs.drawer) {
        this.refs.drawer.addEventListener(evt, handler);
      }
    },
    deregisterDrawerInteractionHandler: (evt, handler) => {
      if(this.refs.drawer) {
        this.refs.drawer.addEventListener(evt, handler);
      }
    },
    hasClass        : cssClass => this.state.classes.has(cssClass),
    hasNecessaryDom : () => Boolean(this.refs.root),
    notifyClose     : () => this.props.onClose(),
    notifyOpen      : () => this.props.onOpen(),
    isDrawer        : (el) => el === this.refs.drawer
  })

  render() {
    const {
      classes
    } = this.state;

    return (
      <div className={[...classes.values()].join(' ')} ref='root'>
        <div className='mdc-temporary-drawer__drawer' ref='drawer'>
          <header className='mdc-temporary-drawer__header'>
            <div className='mdc-temporary-drawer__header-content mdc-theme--primary-bg mdc-theme--text-primary-on-primary'>
              {this.props.header}
            </div>
          </header>
          <nav className='mdc-temporary-drawer__content'>
            {this.props.children}
          </nav>
        </div>
      </div>
    );
  }
}
