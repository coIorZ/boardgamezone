import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <h1> Welcome to Example Home Page</h1>
        <ul>
          <li><Link to='/example/todo-list'>todolist</Link></li>
          <li><Link to='/example/user'>user</Link></li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispath) {

}

export default withRouter(connect(mapStateToProps)(Home));
