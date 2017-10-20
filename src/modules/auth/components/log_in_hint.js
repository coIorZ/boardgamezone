import React from 'react';

import { Flex, Button } from 'components/styled';

export default () => (
  <Flex column center>
    <Button link m-top-bottom-sm to='/auth/register'>SIGN UP</Button>
    <Button link m-top-bottom-sm to='/auth/reset-password'>RESET PASSWORD</Button>
  </Flex>
);