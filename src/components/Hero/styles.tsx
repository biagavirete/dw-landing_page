import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 6rem;
  display: flex;
  flex-direction: row;
  height: 42rem;

  .text-container {
    width: 60%;
    display: flex;
    flex-direction: column;
    z-index: 2;
    position: relative;

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
    margin-top: 15rem;
    width: 55rem;
    height: 29rem;
    z-index: 1;
    position: absolute;
    top: 7.5rem;
    right: 21.875rem;
  }
`;