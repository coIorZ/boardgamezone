import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <p>this is home page</p>
        <div>
          <Link to='/example/todo-list'>todo list</Link>
        </div>
        <div>
          <Link to='/example/post-list'>post list</Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Home);
