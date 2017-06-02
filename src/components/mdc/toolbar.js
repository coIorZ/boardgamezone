import React, { Component } from 'react';

export default class Toolbar extends Component {
  static defaultProps = {
    height      : null,
    title       : '',
    icon        : null,
    onClickIcon : () => {}
  }

  render() {
    const { height, title, icon, onClickIcon } = this.props;

    const iconNode = !icon ? null : (
      <i className='material-icons'
          style={{ paddingRight: 24 }}
          onClick={onClickIcon}>{icon}</i>
    );

    return (
      <header className='mdc-toolbar mdc-toolbar--fixed'
          style={{ height }}>
        <div className='mdc-toolbar__row'>
          <section className='mdc-toolbar__section mdc-toolbar__section--align-start'>
            {iconNode}
            <span className='mdc-toolbar__title'>{title}</span>
          </section>
        </div>
      </header>
    );
  }
}
