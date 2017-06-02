import React from 'react';

import Checkbox from 'components/mdc/checkbox';
import FormField from 'components/mdc/form_field';

const Todo = ({ title, done }) => (
  <FormField>
    <Checkbox checked={done}/>
    <label>{title}</label>
  </FormField>
);

export default Todo;
