import { Router } from 'express';

import asyncWrap from '../lib/async_wrap';
//import apiError, { codes } from '../lib/api_error';

const router = Router();

router.post('/register', asyncWrap(async (req, res) => {
  req.log.debug('test', { foo: 'bar' });
  res.status(200).json({
    code: 0,
  });
}));

export default router;
