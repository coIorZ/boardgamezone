import { Router } from 'express';

const router = Router();

router.get('/example/test', (req, res) => {
  const data = {
    route : req.route,
    foo   : 'bar' 
  };
  req.log.debug('example/test api result:', data);
  res.status(200).json({
    path : '/example/test',
    foo  : 'bar'
  });
});

export default router;
