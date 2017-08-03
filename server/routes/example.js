import { Router } from 'express';

import asyncWrap from '../lib/async_wrap';
//import apiError, { codes } from '../lib/api_error';

const router = Router();

router.get('/test', asyncWrap(async (req, res) => {
  const data = {
    path     : req.route.path,
    baseUrl  : req.baseUrl,
    protocol : req.protocol,
    foo      : 'bar', 
  };
  req.log.debug('[example/test] result:', data);
  //throw apiError({
  //  status : 500,
  //  code   : codes.UNKNOWN,
  //  msg    : 'test'
  //});
  res.status(200).json({
    path : '/example/test',
    foo  : 'bar',
  });
}));

export default router;
