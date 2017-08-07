import React, { Component } from 'react';

import { Flex, Input, Placeholder, Button, Switch } from 'components/styled';

export default class LoginForm extends Component {
  state = {
    username   : '',
    password   : '',
    isRemember : true,
  }

  render() {
    const { username, password, isRemember } = this.state;
    return (
      <Flex center>
        <form onSubmit={this.submitForm}>
          <Input block m-top-bottom 
            value={username} placeholder='Username'
            onInput={this.editUsername}/>
          <Input block m-top-bottom 
            value={password} placeholder='Password' type='password'
            onInput={this.editPassword}/>
          <Flex between middle text-gray m-top-bottom>
            <span>Remember me</span>
            <Switch checked={isRemember}
              onSwitch={this.toggleSwitch}/>
          </Flex>
          <Flex center m-top-bottom-lg>
            <Button raised green absolute>LOG IN</Button>
            <Placeholder sm/>
          </Flex>
        </form>
      </Flex>
    );
  }

  editUsername = e => {
    this.setState({ username: e.target.value });
  }

  editPassword = e => {
    this.setState({ password: e.target.value });
  }

  submitForm = e => {
    e.preventDefault();
  }

  toggleSwitch = () => {
    this.setState({ isRemember: !this.state.isRemember });
  }
}