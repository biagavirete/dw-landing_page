import React from 'react';
import LearnMore from '../LearnMore';

import { Container } from './styles';

export interface FeatureItemProps {
  title: string;
  children: any;
  backgroundImage?: any;
  image: any;
}

const FeatureItem = (props: FeatureItemProps) => {
  return (
    <Container>
      <div className="bg">
        {props.backgroundImage}
      </div>
      <div className="image">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="text">
        <h5>{props.title}</h5>
        <p>
          {props.children}
        </p>
        <LearnMore />
      </div>
    </Container>
  );
};

export default FeatureItem;