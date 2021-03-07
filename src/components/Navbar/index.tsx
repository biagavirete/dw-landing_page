/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { BsArrowRight } from 'react-icons/bs'
import Button from '../Button';
import LogoSvg from '../SVGs/Logo';
import { Container } from './styles';

const NavBar = () => {

  return (
    <Container>
      <LogoSvg data-testid="logo" />
      <nav>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Help</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Signup</a></li>
        </ul>
      </nav>

      <Button isShadowed data-testid="button">Request demo <BsArrowRight size={25} color="#9C69E2" /></Button>
    </Container>
  )
}

export default NavBar;