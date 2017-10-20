import React from 'react';

import { Flex, Button } from 'components/styled';

export default () => (
  <Flex column center>
    <Button link m-top-bottom-sm to='/auth/login'>ALREADY HAVE AN ACCOUNT</Button>
  </Flex>
);