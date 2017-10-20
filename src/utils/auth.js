import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export const withAuth = (Comp, user = 'user') =>
  class WithAuth extends Component {
    render() {
      if(!this.props[user]) return (
        <Redirect to={{
          pathname : '/auth/login',
          state    : { referrer: this.props.location },
        }}/>
      );
      return <Comp {...this.props}/>;
    }
  };