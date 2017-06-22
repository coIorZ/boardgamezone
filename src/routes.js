import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import ScrollToTop from 'components/scroll_to_top';
import example from './modules/example';

export default (
  <Router>
    <ScrollToTop>
      <div>
        {example}
      </div>
    </ScrollToTop>
  </Router>
);
