import React, { Component } from 'react';
import { ripple } from '../../../node_modules/material-components-web/dist/material-components-web.min';

export class List extends Component {
  render() {
    return (
      <ul className='mdc-list'>
        {this.props.children}
      </ul>
    );
  }
}

export class ListItem extends Component {
  componentDidMount() {
    ripple.MDCRipple.attachTo(this.refs.root);
  }

  render() {
    const { 
      onClick = null 
    } = this.props;

    return (
      <li className='mdc-list-item' ref='root'
          onClick={onClick}>
        {this.props.children}
      </li>
    );
  }
}
