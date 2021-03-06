import React from 'react';
import { BsArrowRight } from 'react-icons/bs'
import Button from '../Button';
import { Container } from './styles';

const NavBar = () => {

  return (
    <Container>
      <div className="logo">
        <svg width="49" height="35" viewBox="0 0 49 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="15" width="20" height="20" rx="10" fill="#9C69E2" />
          <rect x="29" width="20" height="35" rx="10" fill="#F063B8" />
        </svg>
      </div>

      <nav>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Help</a></li>
          <li><a href="#">Feature</a></li>
          <li><a href="#">Signup</a></li>
        </ul>
      </nav>

      <Button isShadowed>Request demo <BsArrowRight size={20} color="#9C69E2" /></Button>
    </Container>
  )
}

export default NavBar;