import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Main } from 'components/styled';
import { withAuth } from 'utils/auth';
import { getLoggedUser } from 'modules/global/ducks/selectors';

class Home extends Component {
  render() {
    return (
      <Main dark>
        <div>This is home page, {this.props.user.name}</div>
      </Main>
    );
  }
}

export default connect(
  state => ({
    user: getLoggedUser(state),
  }),
)(withAuth(Home));
