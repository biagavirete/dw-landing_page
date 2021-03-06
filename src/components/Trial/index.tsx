import React from 'react';
import Button from '../Button';
import { BsArrowRight } from 'react-icons/bs'
import { Container } from './styles';

const Trial = () => {
  return (
    <Container>
      <div className="title-container">
        <h3>Try for free!</h3>
        <p>Get limited 1 week free try our features!</p>
      </div>
      <div className="btn-container">
        <Button isShadowed={false} backgroundColor="#F063B8">Learn more</Button>
        <Button isShadowed={true}>Request demo <BsArrowRight size={25} color="#9C69E2" /></Button>
      </div>
    </Container>
  )
}

export default Trial;