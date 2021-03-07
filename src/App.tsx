import React from 'react';
import NavBar from './components/Navbar';
import Hero from './components/Hero';
import { Container } from './styles';
import PinkArea from './components/PinkArea';
import Features from './components/Features';
import Bottom from './components/Bottom';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <>
      <Container>
        <NavBar />
        <Hero />
        <PinkArea />
        <Features />
        <Testimonials />
        <hr />
        <Bottom />
      </Container>
    </>
  );
}

export default App;
