import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
    font-family: 'Poppins', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: #fff;
    color: #4B5D68;
    background: linear-gradient(180deg, #F6FAFD 0%, #FFFFFF 19.4%);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Helvetica', sans-serif;
    font-weight: 700;
  }
`;

export default GlobalStyle;