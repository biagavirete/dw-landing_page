import React from 'react';
import Image from '../../assets/image2.svg';
import { Container } from './styles';

const PinkArea = () => {

  return (
    <Container>
      <div className="image-container">
        <img src={Image} alt="Bank" />
      </div>

      <div className="text-container">
        <h3>
          We are a high-level data storage bank
        </h3>

        <p>
          The place to store various data that you can
          access at any time through the internet and where
          you can carry it. This very flexible storage area has
          a high level of security. To enter into your own data
          you must enter the password that you created when you
          registered in this Data Warehouse.
        </p>
      </div>
    </Container>
  )
}

export default PinkArea;