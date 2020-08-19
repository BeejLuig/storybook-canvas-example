import Button from '../components/button'

export default {
  title: 'Button',
  argTypes: {
    label: {
      control: 'text'
    },
    onClick: {
      action: 'clicked'
    }
  },
};

export const Basic = (args) => Button({...args});
Basic.args = { label: 'Button' }

