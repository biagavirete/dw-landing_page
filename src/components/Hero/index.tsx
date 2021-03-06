import React from 'react';
import Button from '../Button';
import HeroImg from '../../assets/hero-image.svg';
import { Container } from './styles';

const Hero = () => {

  return (
    <Container>

      <div className="text-container">
        <h1>Save your data storage here.</h1>
        <p>Data Warehouse is a data storage area that <br /> has been
        tested for security, so you can store <br /> your data here
          safely but not be afraid of <br /> being stolen by others.</p>

        <Button isShadowed={false} backgroundColor="#9C69E2">Learn more</Button>

      </div>

      <div className="image-container">
        <img src={HeroImg} alt="Hero" />
      </div>
    </Container>

  )
}

export default Hero;