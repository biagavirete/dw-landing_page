import React from 'react';
import NavBar from './components/Navbar';
import Hero from './components/Hero';
import { Container } from './styles';
import PinkArea from './components/PinkArea';

function App() {
  return (
    <>
      <Container>
        <NavBar />
        <Hero />
        <PinkArea />
      </Container>
    </>
  );
}

export default App;
