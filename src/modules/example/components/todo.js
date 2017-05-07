import React from 'react';

const noop = function() {};

export default ({ title, id, onToggle = noop }) => (
  <li>
    <span onClick={onToggle.bind(null, id)}>
      {title}
    </span>
  </li>
);
