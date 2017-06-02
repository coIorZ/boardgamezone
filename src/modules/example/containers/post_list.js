import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Headbar from '../components/headbar';

class PostList extends Component {
  render() {
    return (
      <div>
        <Headbar title='Post List'/>
        <div className='mdc-toolbar-fixed-adjust'>
          Post List Page
        </div>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default withRouter(connect(mapStateToProps)(PostList));
