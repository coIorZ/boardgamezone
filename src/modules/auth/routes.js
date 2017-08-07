import { bundle } from 'utils/redux_bundle';

const getComp = name => bundle(import(/* webpackChunkName: "auth" */ './index'), { name });

export default [
  { path: '/auth/login', render: getComp('Login') },
  { path: '/auth/register', render: getComp('Signup') },
];
