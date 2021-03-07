import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import CircledIcon, { CircledIconProps } from '../CircledIcon';
import { FaTwitter } from 'react-icons/fa';

export default {
  title: 'Example/Circled Icon',
  component: CircledIcon,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<CircledIconProps> = (args) => <CircledIcon {...args} />;

export const Text = Template.bind({});
Text.args = {
  width: '50px',
  height: '50px',
  backgroundColor: '#F063B8',
  children: 'Hello',
};

export const Icon = Template.bind({});
Icon.args = {
  width: '50px',
  height: '50px',
  backgroundColor: '#63bcf0',
  children: <FaTwitter size={20} color="#fff" />,
};
