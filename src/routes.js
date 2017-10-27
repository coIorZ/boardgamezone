import { map } from 'lodash';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ScrollToTop from 'components/scroll_to_top';
import example from 'modules/example/routes';
import main from 'modules/main/routes';
import auth from 'modules/auth/routes';

const routes = [
  ...example,
  ...auth,
  ...main,
];

export default (
  <Router>
    <ScrollToTop>
      <Switch>
        {map(routes, ({ path, exact, render }) => (
          <Route path={path} exact={exact} render={render}/>
        ))}
      </Switch>
    </ScrollToTop>
  </Router>
);
