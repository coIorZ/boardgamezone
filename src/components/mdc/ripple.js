import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { ripple } from '../../../node_modules/material-components-web/dist/material-components-web.min';

export function withRipple(Comp) {
  return class extends Component {
    componentDidMount() {
      ripple.MDCRipple.attachTo(findDOMNode(this.refs.comp));
    }

    render() {
      return (
        <Comp ref='comp' {...this.props}>
          {this.props.children}
        </Comp>
      );
    }
  };
}
