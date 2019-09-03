import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { ProductComponent } from '../src/component'

storiesOf('Product Component', module)
  .add('With props', () => <ProductComponent id={"594471"}></ProductComponent>)
