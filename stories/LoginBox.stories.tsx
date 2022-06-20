import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import LoginBox, { LoginBoxProps } from '../components/molecules/LoginBox';

export default {
  title: 'Components/Molecules/LoginBox',
  component: LoginBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<LoginBoxProps> = (args) => <LoginBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Login Admin',
  colorIdentity: '#DE5B5B',
  closeHandler: () => console.log('login box closed'),
};
