import React from 'react';
import NavBar from './components/Navbar';
import Hero from './views/Hero';
import { Container } from './styles';
import PinkArea from './views/PinkArea';
import Features from './views/Features';
import Bottom from './views/Bottom';
import Testimonials from './views/Testimonials';

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
