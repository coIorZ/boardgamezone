import React from 'react';
import Home from './container/home';

export default [
  { path: '/', render: props => (<Home {...props}/>), exact: true },
];