import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Toolbar from 'components/mdc/toolbar';

class PostList extends Component {
  render() {
    return (
      <Toolbar title='Example Module: postlist'>
        <h1>Post List Page</h1>
      </Toolbar>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default withRouter(connect(mapStateToProps)(PostList));
