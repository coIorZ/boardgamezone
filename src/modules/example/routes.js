import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { bundle } from 'utils/redux/redux_bundle';

export default (
  <Switch>
    <Route exact path='/example' component={() => bundle(import('./index'), 'Home')}/>
    <Route path='/example/todo-list' component={() => bundle(import('./index'), 'TodoList')}/>
  <Route path='/example/post-list' component={() => bundle(import('./index'), 'PostList')}/>
</Switch>
);
