import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { bundle } from 'utils/redux_bundle';

const getComp = name => bundle(import(/* webpackChunkName: "example" */ './index'), { name }); 

export default (
  <Switch>
    <Route exact path='/example' render={getComp('Home')}/>
    <Route path='/example/todo-list' render={getComp('TodoList')}/>
    <Route path='/example/post-list' render={getComp('PostList')}/>
  </Switch>
);
