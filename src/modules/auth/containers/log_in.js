import { get } from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { Main, Placeholder } from 'components/styled';
import Header from '../components/header';
import LogInForm from '../components/log_in_form';
import LogInHint from '../components/log_in_hint';
import { getLoggedUser } from 'modules/global/ducks/selectors';
import { logIn } from '../ducks/actions';

export class LogIn extends Component {
  render() {
    const referrer = get(this.props, 'location.state.referrer') || '/';
    if(this.props.user) return (
      <Redirect to={referrer}/>
    );
    return (
      <Main dark>
        <Header/>
        <LogInForm {...this.props}/>
        <Placeholder lg/>
        <LogInHint/>
      </Main>
    );
  }
}

export default connect(
  state => ({
    user: getLoggedUser(state),
  }),
  { logIn },
)(LogIn);
