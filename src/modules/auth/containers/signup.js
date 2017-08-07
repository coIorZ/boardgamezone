import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../components/header';

export class Signup extends Component {
  render() {
    return (
      <main>
        <Header/>
      </main>
    );
  }
}

export default connect(
  () => ({}),
)(Signup);