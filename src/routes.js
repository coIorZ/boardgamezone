import { map } from 'lodash';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ScrollToTop from 'components/scroll_to_top';
import example from 'modules/example/routes';
import browse from 'modules/browse/routes';
import auth from 'modules/auth/routes';

const routes = [
  ...example,
  ...auth,
  ...browse,
];

export default (
  <Router>
    <ScrollToTop>
      <Switch>
        {map(routes, route => (
          <Route path={route.path} exact={route.exact} render={route.render}/>
        ))}
      </Switch>
    </ScrollToTop>
  </Router>
);
