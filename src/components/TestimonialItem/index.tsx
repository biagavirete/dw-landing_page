import React from 'react';
import { Container } from './styles';

interface TestimonialItemProps {
  name: string;
  title: string;
  avatar: any;
  description: any;
}

const TestimonialItem = (props: TestimonialItemProps) => {
  return (
    <Container>
      <div className="inner-content">
        <div className="top">
          <img src={props.avatar} alt="Avatar" />
          <div className="title-area">
            <strong>{props.name}</strong>
            <p>{props.title}</p>
          </div>
        </div>
        <div className="bottom">
          <p>
            {props.description}
          </p>
        </div>
      </div>
    </Container>
  )
}

export default TestimonialItem;