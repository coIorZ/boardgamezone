import React from 'react';

export default ({ title, done, onToggle = null } = {}) => (
  <li className='mdc-list-item mdc-form-field mdc-ripple-surface'
      onClick={onToggle}>
    <div className='mdc-checkbox'>
      <input type='checkbox' 
          checked={done}
          className='mdc-checkbox__native-control'/>
      <div className='mdc-checkbox__background'>
        <svg className='mdc-checkbox__checkmark' 
            viewBox='0 0 24 24'>
          <path className='mdc-checkbox__checkmark__path'
              fill='none'
              stroke='white'
              d='M1.73,12.91 8.1,19.28 22.79,4.59'/>
        </svg>
        <div className='mdc-checkbox__mixedmark'></div>
      </div>
    </div>
    <label>{title}</label>
  </li>
);
