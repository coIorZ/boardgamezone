import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <h3>this is home page</h3>
        <ul>
          <li><Link to='/example/todo-list'>todo list</Link></li>
          <li><Link to='/example/post-list'>post list</Link></li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Home);
