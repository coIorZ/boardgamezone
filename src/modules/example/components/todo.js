import React from 'react';

const Todo = ({ title, done, onClick }) => (
  <div onClick={onClick}>
    <input type='checkbox' checked={done}/>
    <label>{title}</label>
  </div>
);

export default Todo;
