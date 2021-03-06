import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Button, { ButtonProps } from '../Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isShadowed: false,
  children: 'Primary button',
  backgroundColor: '#F063B8'
};

export const Shadowed = Template.bind({});
Shadowed.args = {
  isShadowed: true,
  children: 'Secondary button',
};