import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import FeatureItem, { FeatureItemProps } from '../FeatureItem';
import Printer from '../../assets/printer.png';
import PinkBG from '../SVGBackgrounds/Pink';

export default {
  title: 'Example/Features item',
  component: FeatureItem,
} as Meta;

const Template: Story<FeatureItemProps> = (args) => <FeatureItem {...args} />;

export const FeaturesItem = Template.bind({});
FeaturesItem.args = {
  title: 'Título',
  children: <p>Don’t worry if your data is very large, the Data Warehoue provides a search engine, which
  is useful for making it easier to find data effectively saving time.</p>,
  backgroundImage: <PinkBG />,
  image: Printer,
};
