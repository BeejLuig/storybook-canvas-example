import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Circle from '../components/circle'

export default {
  title: 'Circle',
  argTypes: {
    radius: { 
      control: {
        type: 'range',
        min: 1,
        max: 100
      }
    },
  },
};

export const Basic = (args) => Circle({...args});
Basic.args = { radius: 50 }

