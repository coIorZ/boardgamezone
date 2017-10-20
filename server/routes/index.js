import { Router } from 'express';

import example from './example';
import auth from './auth';

const router = Router();

router.use('/example', example);
router.use('/auth', auth);

router.use((err, req, res, next) => {
  if(!err.__api__) return next(err);
  const { code, status, msg } = err;
  req.log.error(`[Api Error] ${req.originalUrl}`, err);
  res.status(status).json({ code, msg });
});

export default router;
