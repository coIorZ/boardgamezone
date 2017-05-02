import { applyMiddleware } from 'redux';

import { createStore } from 'common/redux_async';
import logger from 'common/middleware/logger';

const store = createStore(
  () => {return {};},
  applyMiddleware(
    logger
  )
); 

export default store;
