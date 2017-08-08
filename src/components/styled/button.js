import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Base, { baseStyles } from './base';

const buttonBackgroundColor = props => {
  if(props.green) return '#1db954';
  return '#1db954';
};
const buttonHoverColor = props => {
  if(props.green) return '#1ed760';
  return '#1ed760';
};
const buttonActiveColor = props => {
  if(props.green) return '#14833b';
  return '#14833b';
};

const RaisedButton = Base.withComponent('button').extend`
  outline: none;
  border: none;
  color: #ffffff;
  font-size: 1.1rem;
  letter-spacing: .15rem;
  padding: .9rem 2.9rem;
  border-radius: 10rem;
  background-color: ${props => buttonBackgroundColor(props)};
  &:hover {
    font-size: 1.2rem;
    background-color: ${props => buttonHoverColor(props)};
  }
  &:active {
    color: #cccccc;
    font-size: 1.1rem;
    background-color: ${props => buttonActiveColor(props)};
  }
`;

const LinkButton = styled(Link)`
  ${baseStyles}
  outline: none;
  border: none;
  border-bottom: 1px solid transparent;
  color: #ffffff;
  font-size: 1.1rem;
  letter-spacing: .15rem;
  background-color: transparent;
  padding: 0;
  font-weight: 100;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    border-bottom: 1px solid #ffffff;
  }
`;

export default ({ raised, link, ...props }) => {
  if(raised) return <RaisedButton {...props}/>;
  if(link) return <LinkButton {...props}/>;
  return <RaisedButton {...props}/>;
};