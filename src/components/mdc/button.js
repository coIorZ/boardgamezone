import React, { Component } from 'react';

import { withRipple } from 'components/mdc/ripple';

export default class Button extends Component {
  static defaultProps = {
    onClick: () => {}
  }

  render() {
    return (
      <button className='mdc-button mdc-button--raised' 
          ref='root'
          onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}

const RippleButton = withRipple(Button);

export { 
  Button,
  RippleButton
};
