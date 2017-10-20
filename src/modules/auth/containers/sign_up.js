import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Main, Placeholder } from 'components/styled';
import Header from '../components/header';
import SignUpForm from '../components/sign_up_form';
import SignUpHint from '../components/sign_up_hint';
import { signUp } from '../ducks/actions';

export class SignUp extends Component {
  render() {
    return (
      <Main>
        <Header/>
        <SignUpForm {...this.props}/>
        <Placeholder/>
        <SignUpHint/>
      </Main>
    );
  }
}

export default connect(
  () => ({}),
  { signUp },
)(SignUp);