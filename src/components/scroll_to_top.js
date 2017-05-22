/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
/*eslint-enable no-unused-vars*/

export default class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (
      this.props.location !== prevProps.location &&
      this.props.history.action === 'PUSH'
    ) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}
