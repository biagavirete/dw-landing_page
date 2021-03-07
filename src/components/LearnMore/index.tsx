/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { BsArrowRight } from 'react-icons/bs'
import { Container } from './styles';

const LearnMore = () => {
  return (
    <Container>
      <a href="#" data-testid="anchor">Learn more <BsArrowRight color="#9C69E2" size={24} /></a>
    </Container>
  )
}

export default LearnMore;