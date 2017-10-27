import { Router } from 'express';

import asyncWrap from '../lib/async_wrap';
//import apiError, { codes } from '../lib/api_error';
import restApi from '../lib/rest_api';

const router = Router();
const userModel = restApi('USERS');

router.post('/register', asyncWrap(async (req, res) => {
  req.log.debug('/auth/register: req.body', req.body);
  const { username, email, password } = req.body;
  const { user, code, msg } = await userModel.create({
    username,
    password,
    email,
  });
  res.status(200).json({
    code,
    msg,
    user,
  });
}));

router.post('/login', asyncWrap(async (req, res) => {
  res.status(200).json({
    code : 0,
    name : 'coiorz',
  });
}));

export default router;