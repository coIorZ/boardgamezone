import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { createBundle } from 'utils/redux/redux_async';

import home from './containers/home';
//import home from 'bundle-loader?lazy&name=[name]!./containers/home';
import todoList from 'bundle-loader?lazy&name=[name]!./containers/todo_list';
import reducer from 'bundle-loader?lazy&name=[name]!./ducks';

const bundle = createBundle(reducer);

export default (
  <Switch>
    <Route exact path='/example' component={home}/>
    <Route path='/example/todo-list' component={bundle(todoList)}/>
    <Route component={bundle(home)}/>
  </Switch>
);
