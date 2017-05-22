import React, { Component } from 'react';
import { ripple } from '../../../node_modules/material-components-web/dist/material-components-web.min';

export default class Button extends Component {
  componentDidMount() {
    ripple.MDCRipple.attachTo(this.refs.root);
  }

  render() {
    const {
      label = '',
      onClick = null
    } = this.props;
    
    return (
      <button className='mdc-button mdc-button--raised' 
          ref='root'
          onClick={onClick}>
        {label}
      </button>
    );
  }
}
