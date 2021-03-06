import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 6rem;
  display: flex;

  .text-container {
    width: 50rem;
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 5rem;
      font-weight: 700;
      color: #212353;
      flex-wrap: wrap;
    }

    p {
      font-size: 1.125rem;
      color: #4B5D68;
    }
  }

  .image-container {
    margin-top: 15rem;
    width: 55rem;
    height: 29rem;

  }
`;