import React from 'react';

import Checkbox from 'components/mdc/checkbox';

const Todo = ({ title, done } = {}) => (
  <div className='mdc-form-field'>
    <Checkbox checked={done}/>
    <label>{title}</label>
  </div>
);

export default Todo;
