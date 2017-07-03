import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
  render() {
    return (
      <div>
        <h3>this is login page</h3>
        <form>
          <label>username</label>
          <input type='text'/>
          <label>password</label>
          <input type='password'/>
        </form>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Login);
