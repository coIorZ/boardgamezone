import React from 'react';

export default ({ todo = {}, onClick = () => {} }) => (
  <li onClick={onClick}>
    <input type='checkbox' checked={todo.done}/>
    <label>{todo.title}</label>
  </li>
);
