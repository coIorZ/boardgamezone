import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Placeholder } from 'components/styled';
import Header from '../components/header';
import LoginForm from '../components/login_form';
import LoginHint from '../components/login_hint';

export class Login extends Component {
  render() {
    return (
      <main>
        <Header/>
        <LoginForm {...this.props}/>
        <Placeholder xl/>
        <LoginHint {...this.props}/>
      </main>
    );
  }
}

export default connect(
  () => ({}),
)(Login);
