import React, { Component } from 'react';
import { drawer } from '../../../node_modules/material-components-web/dist/material-components-web.min';

export default class Drawer extends Component {
  static defaultProps = {
    onClose : () => {},
    active  : false
  }

  state = {
    classes: new Set(['mdc-temporary-drawer'])
  }

  componentDidMount() {
    this.foundation.init();
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.active !== nextProps.active) {
      if(this.foundation) {
        if(nextProps.active) {
          this.foundation.open();
        } else {
          this.foundation.close();
        }
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
    hasClass        : cssClass => this.state.classes.has(cssClass),
    hasNecessaryDom : () => Boolean(this.refs.root),
    notifyClose     : () => this.props.onClose(),
    isDrawer        : (el) => el === this.refs.drawer
  })

  render() {
    const {
      classes
    } = this.state;

    const {
      header = null
    } = this.props;

    return (
      <div className={[...classes.values()].join(' ')} ref='root'>
        <div className='mdc-temporary-drawer__drawer' ref='drawer'>
          <header className='mdc-temporary-drawer__header'>
            <div className='mdc-temporary-drawer__header-content mdc-theme--primary-bg mdc-theme--text-primary-on-primary'>
              {header}
            </div>
          </header>
          <nav className='mdc-temporary-drawer__content'>
          </nav>
        </div>
      </div>
    );
  }
}
