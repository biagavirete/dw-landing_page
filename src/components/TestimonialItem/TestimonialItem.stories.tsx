import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import TestimonialItem, { TestimonialItemProps } from '../TestimonialItem';
import ManAvatar from '../../assets/man-avatar.jpg';

export default {
  title: 'Example/Testimonial',
  component: TestimonialItem,
} as Meta;

const Template: Story<TestimonialItemProps> = (args) => <TestimonialItem {...args} />;

export const Testimonial = Template.bind({});
Testimonial.args = {
  name: 'John Doe',
  title: 'CEO at JDs Company',
  avatar: ManAvatar,
  description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et luctus velit. Donec vel leo metus. Vestibulum et dignissim lectus. Sed cursus dolor nec auctor posuere. Mauris malesuada, quam in mollis euismod, ante sapien dictum ante, vel consequat justo tellus non dui. Nullam a nunc in neque ultrices dignissim. Pellentesque pellentesque venenatis arcu, interdum rhoncus neque rutrum at.'
};
