import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
    font-family: 'Poppins', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100vw; 
    height: 100vh;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    color: #4B5D68;
    background-color: #F6FAFD;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Helvetica', sans-serif;
    font-weight: 700;
  }
`;

export default GlobalStyle;