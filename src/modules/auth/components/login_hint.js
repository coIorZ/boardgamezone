import React from 'react';
import { Link } from 'react-router-dom';

import { Flex, Button } from 'components/styled';

export default () => (
  <Flex column center>
    <Link to='/auth/register'>
      <Button link m-top-bottom-sm>SIGN UP</Button>
    </Link>
    <Link to='/auth/reset-password'>
      <Button link m-top-bottom-sm>RESET PASSWORD</Button>
    </Link>
  </Flex>
);