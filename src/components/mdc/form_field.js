import React, { Component } from 'react';

export default class FormField extends Component {
  render() {
    return (
      <div className='mdc-form-field'>
        {this.props.children}
      </div>
    );
  }
}
