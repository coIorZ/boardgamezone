import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { createBundle } from 'utils/redux/redux_async';

import Home from './containers/home';
//import home from 'bundle-loader?lazy&name=[name]!./containers/home';
import TodoList from 'bundle-loader?lazy&name=[name]!./containers/todo_list';
import PostList from 'bundle-loader?lazy&name=[name]!./containers/post_list';
import reducer from 'bundle-loader?lazy&name=[name]!./ducks';

const bundle = createBundle(reducer);

export default (
  <Switch>
    <Route exact path='/example' component={Home}/>
    <Route path='/example/todo-list' component={bundle(TodoList)}/>
    <Route path='/example/post-list' component={bundle(PostList)}/>
    <Route component={Home}/>
  </Switch>
);
