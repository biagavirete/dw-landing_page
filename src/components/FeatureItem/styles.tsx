import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
    justify-items: center;
    margin-bottom: 6.2rem;

    .bg {
      z-index: 1;
      position: absolute;
    }

    .image {
      margin-top: 2rem;
      margin-left: -6rem;
      z-index: 2;
    }

    .text {
      z-index: 2;
      width: 13.75rem;
      padding: 2rem;
      position: relative;

      h5 {
        margin: 0;
      }
    }
`;