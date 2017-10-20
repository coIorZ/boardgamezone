import React, { Component } from 'react';

import { Flex, Placeholder, Input, Button } from 'components/styled';

export default class SignUpForm extends Component {
  state = {
    username     : '',
    email        : '',
    confirmEmail : '',
    password     : '',
  }

  render() {
    const { username, email, confirmEmail, password } = this.state;

    return (
      <Flex center>
        <form onSubmit={this.submitForm}>
          <Input block m-top-bottom value={username} placeholder='Username'
            onInput={this.editUsername}/>
          <Input block m-top-bottom value={email} placeholder='Email'
            onInput={this.editEmail}/>
          <Input block m-top-bottom value={confirmEmail} placeholder='Confirm Email'
            onInput={this.editConfirmEmail}/>
          <Input block m-top-bottom value={password} placeholder='Password' type='password'
            onInput={this.editPassword}/>
          <Flex center m-top-bottom-lg>
            <Button raised green absolute type='submit'>SIGN UP</Button>
            <Placeholder sm/>
          </Flex>
        </form>
      </Flex>
    );
  }

  editUsername = e => {
    this.setState({ username: e.target.value });
  }
  editEmail = e => {
    this.setState({ email: e.target.value });
  }
  editConfirmEmail = e => {
    this.setState({ confirmEmail: e.target.value });
  }
  editPassword = e => {
    this.setState({ password: e.target.value });
  }

  submitForm = e => {
    e.preventDefault();
    const { username, email, confirmEmail, password } = this.state;
    this.props.signUp({ username, email, confirmEmail, password });
  }
}