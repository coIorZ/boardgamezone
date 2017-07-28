import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css';
import 'rxjs';
//import 'babel-polyfill';

import store from './store';
import routes from './routes';

ReactDom.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('app')
);
