import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { createBundle } from 'utils/redux/redux_bundle';

import Home from './containers/home';
//import home from 'bundle-loader?lazy&name=[name]!./containers/home';
import TodoList from 'bundle-loader?lazy&name=example.[name]!./containers/todo_list';
import PostList from 'bundle-loader?lazy&name=example.[name]!./containers/post_list';
import ducks from 'bundle-loader?lazy&name=example.[name]!./ducks';

const bundle = createBundle(ducks);

export default (
  <Switch>
    <Route exact path='/example' component={Home}/>
    <Route path='/example/todo-list' component={bundle(TodoList)}/>
    <Route path='/example/post-list' component={bundle(PostList)}/>
    <Route component={Home}/>
  </Switch>
);
