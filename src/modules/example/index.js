import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { createBundle } from 'common/redux_async';

import reducer from 'bundle-loader?lazy!./ducks';
import home from 'bundle-loader?lazy!./containers/home';
import todoList from 'bundle-loader?lazy!./containers/todo_list';

const bundle = createBundle(reducer);

export default (
  <Switch>
    <Route exact path='/example' component={bundle(home)}/>
    <Route path='/example/todo-list' component={bundle(todoList)}/>
    <Route component={bundle(home)}/>
  </Switch>
);
