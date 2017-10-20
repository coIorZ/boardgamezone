import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { injectGlobal } from 'styled-components';
import 'rxjs/Rx';

import store from './store';
import routes from './routes';

ReactDom.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('app'),
);

injectGlobal`
  html {
    font-size: 10px;
  }

  body {
    font-size: 1.4rem;
  }
`;
