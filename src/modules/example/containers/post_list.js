import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostList extends Component {
  render() {
    return (
      <div>
        <p>this is post list page</p>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(PostList);
