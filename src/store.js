import { applyMiddleware } from 'redux';

import { createStore } from 'utils/redux/redux_async';
import logger from 'utils/redux/logger';

const store = createStore(
  () => {return {};},
  applyMiddleware(
    logger
  )
); 

export default store;
