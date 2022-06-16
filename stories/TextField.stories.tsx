import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import TextField, { TextFieldProps } from '../components/atoms/TextField';

export default {
  title: 'Components/Atoms/TextField',
  component: TextField,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<TextFieldProps> = (args) => <TextField {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  placeholder: 'example',
  disabled: false,
};

export const Prefix = Template.bind({});
Prefix.args = {
  ...Normal.args,
  placeholder: '0,00',
  _prefix: <span className="kc-body2">Rp</span>,
};

export const Suffix = Template.bind({});
Suffix.args = {
  ...Normal.args,
  placeholder: '0',
  suffix: <span className="kc-body2">PCS</span>,
};

export const PrefixSuffix = Template.bind({});
PrefixSuffix.args = {
  ...Prefix.args,
  suffix: <span className="kc-body2">/PCS</span>,
};

export const Label = Template.bind({});
Label.args = {
  ...Normal.args,
  title: 'Username',
};

export const Helper = Template.bind({});
Helper.args = {
  ...Normal.args,
  subtitle: 'Wajib diisi',
};

export const TitleSubtitle = Template.bind({});
TitleSubtitle.args = {
  ...Normal.args,
  title: 'Username',
  subtitle: 'Wajib diisi',
};
