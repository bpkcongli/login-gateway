import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import Button, { ButtonProps } from '../components/atoms/Button';

export default {
  title: 'Components/Atoms/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button Primary',
  type: 'primary',
  size: 'short',
  disabled: false,
  loading: false,
};

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, label: 'Button Secondary', type: 'secondary' };
