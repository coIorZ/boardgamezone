import { Router } from 'express';

const router = Router();

router.get('/example/test', (req, res) => {
  const data = {
    path     : req.route.path,
    baseUrl  : req.baseUrl,
    protocol : req.protocol,
    foo      : 'bar' 
  };
  req.log.debug('[example/test] result:', data);
  res.status(200).json({
    path : '/example/test',
    foo  : 'bar'
  });
});

export default router;
