import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 42rem;

  .text-container {
    width: auto;
    display: flex;
    flex-direction: column;
    z-index: 10;

    h1 {
      font-size: 5rem;
      font-weight: 700;
      color: #212353;
      margin-bottom: 0;
      
    }

    p {
      margin-top: 3rem;
      font-size: 1.125rem;
      color: #4B5D68;
      line-height: 2rem;
    }

    button {
      margin-top: 3rem;
    }
  }

  .image-container {
    margin-top: 10rem;
    width: 50rem;
    margin-left: -25rem;   

  }
`;