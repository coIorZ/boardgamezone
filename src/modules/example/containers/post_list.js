import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostList extends Component {
  render() {
    return (
      <div>
        <h3>this is post list page</h3>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(PostList);
