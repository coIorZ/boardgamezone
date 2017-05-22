import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import Toolbar from 'components/mdc/toolbar';
import { List, ListItem } from 'components/mdc/list';

class Home extends Component {
  render() {
    return (
      <Toolbar title='Example Module'>
        <List>
          <Link to='/example/todo-list'><ListItem>todo list</ListItem></Link>
          <Link to='/example/post-list'><ListItem>post list</ListItem></Link>
        </List>
      </Toolbar>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default withRouter(connect(mapStateToProps)(Home));
