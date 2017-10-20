import { bundle } from 'utils/redux_bundle';

const getComp = name => props =>
  bundle(import(/* webpackChunkName: "auth" */ './index'), { name, props });

export default [
  { path: '/auth/login', render: getComp('LogIn') },
  { path: '/auth/register', render: getComp('SignUp') },
];
