import React from 'react';
import styled from 'styled-components';

export default ({ title = '', checked = false, onClick = () => {} }) => (
  <li>
    <Item checked={checked} onClick={onClick}>{title}</Item>
  </li>
);

const Item = styled.span`
  text-decoration: ${props => props.checked ? 'line-through' : 'none'};
  cursor: pointer;
`;
