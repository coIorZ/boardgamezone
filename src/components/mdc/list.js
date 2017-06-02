import React, { Component } from 'react';

import { withRipple } from 'components/mdc/ripple';

class List extends Component {
  render() {
    return (
      <ul className='mdc-list'>
        {this.props.children}
      </ul>
    );
  }
}

class ListItem extends Component {
  static defaultProps = {
    onClick: () => {}
  }

  render() {
    return (
      <li className='mdc-list-item' ref='root'
          onClick={this.props.onClick}>
        {this.props.children}
      </li>
    );
  }
}

const RippleListItem = withRipple(ListItem);

export {
  List,
  ListItem,
  RippleListItem
};
