import React, { Component } from 'react';

import Toolbar from 'components/mdc/toolbar';
import Drawer from 'components/mdc/drawer';

export default class Headbar extends Component {
  state = {
    isDrawerActive: false
  }

  render() {
    const {
      isDrawerActive = false
    } = this.state;

    const {
      title = ''
    } = this.props;

    const headerNode = (<span>Example</span>);

    return (
      <div>
        <Drawer active={isDrawerActive}
            header={headerNode}
            onClose={this.closeDrawer}/>
        <Toolbar title={title}
            icon='menu'
            onClick={this.openDrawer}/>
      </div>
    );
  }

  openDrawer = () => {
    this.setState({
      isDrawerActive: true
    });
  }
  
  closeDrawer = () => {
    this.setState({
      isDrawerActive: false
    });
  }
}
