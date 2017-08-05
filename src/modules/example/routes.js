import { bundle } from 'utils/redux_bundle';

const getComp = name => bundle(import(/* webpackChunkName: "example" */ './index'), { name });

export default [
  { path: '/example', render: getComp('Home'), exact: true },
  { path: '/example/todo-list', render: getComp('TodoList') },
  { path: '/example/post-list', render: getComp('PostList') },
];
