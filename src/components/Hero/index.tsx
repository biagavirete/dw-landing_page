import React from 'react';
import Button from '../Button';
import { Container } from './styles';
import HeroSvg from '../SVGs/Hero';

const Hero = () => {

  return (
    <Container>

      <div className="text-container">
        <h1>Save your data storage here.</h1>
        <p>Data Warehouse is a data storage area <br /> that has been
        tested for security, so you <br /> can store your data here
          safely but <br /> not be afraid of being stolen by others.</p>

        <Button isShadowed={false} backgroundColor="#9C69E2">Learn more</Button>

      </div>

      <div className="image-container">
        <HeroSvg />
      </div>
    </Container>

  )
}

export default Hero;