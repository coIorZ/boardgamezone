import React from 'react';

import Base from './base';

const Outter = Base.withComponent('div').extend`
  position: relative;
  border: 2px solid;
  border-color: ${props => props.checked ? '#1db954' : '#404040'};
  border-radius: 10rem;
  width: 3.4rem;
  height: 1.8rem;
  background-color: ${props => props.checked ? '#1db954' : '#000000'};
  transition: all .2s;
`;

const Inner = Base.withComponent('div').extend`
  position: absolute;
  top: -.2rem;
  left: ${props => props.checked ? '1.4rem' : '-.2rem'};
  height: 2.2rem;
  width: 2.2rem;
  background-color: ${props => props.checked ? '#ffffff' : '#a0a0a0'};
  border-radius: 100%;
  box-shadow: 0 0 .3rem 0 #000000;
  transition: background-color .5s, left .4s, width .2s;
  &:hover {
    background-color: #ffffff;
  }
  &:active {
    width: 2.5rem;
  }
  ${Outter}:hover & {
    background-color: #ffffff;
  }
`;

export default ({ checked, onSwitch = () => ({}), ...props }) => (
  <Outter checked={checked} onClick={onSwitch} {...props}>
    <Inner checked={checked} {...props}></Inner>
  </Outter>
);