import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withAuth } from 'utils/auth';
import { getLoggedUser } from 'modules/global/ducks/selectors';

class Home extends Component {
  render() {
    return (
      <div>This is home page, {this.props.user.name}</div>
    );
  }
}

export default connect(
  state => ({
    user: getLoggedUser(state),
  }),
)(withAuth(Home));