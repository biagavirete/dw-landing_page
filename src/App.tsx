import React from 'react';
import Button from './components/Button';
import NavBar from './components/Navbar';
import GlobalStyles from './GlobalStyles';
import { Container } from './styles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <NavBar />
      </Container>
    </>
  );
}

export default App;
