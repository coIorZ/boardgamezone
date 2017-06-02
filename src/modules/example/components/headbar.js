import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Toolbar from 'components/mdc/toolbar';
import Drawer from 'components/mdc/drawer';
import { List, ListItem } from 'components/mdc/list';

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
        <Toolbar title={title}
            icon='menu'
            onClickIcon={this.openDrawer}/>
        <Drawer active={isDrawerActive}
            header={headerNode}
            onClose={this.closeDrawer}>
          <List>
            <Link to='/example/todo-list'>
              <ListItem><div>todo list</div></ListItem>
            </Link>
            <Link to='/example/post-list'>
              <ListItem><div>post list</div></ListItem>
            </Link>
          </List>
        </Drawer>
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
