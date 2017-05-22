import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import Toolbar from 'components/mdc/toolbar';

class Home extends Component {
  render() {
    return (
      <Toolbar title='Example Module'>
        <ul>
          <li><Link to='/example/todo-list'>todo list</Link></li>
          <li><Link to='/example/post-list'>post list</Link></li>
        </ul>
      </Toolbar>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default withRouter(connect(mapStateToProps)(Home));
