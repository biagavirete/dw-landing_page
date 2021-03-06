import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 6.2rem;
  height: 6.3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  align-items: center;

  .title-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    h3 {
      font-size: 2.5rem;
      font-weight: bold;
      color: #212353;
      margin: 0;
    }

    p {
      font-size: 1.125rem;
      color: #4B5D68;
    }
  }

  .btn-container {
    display: flex;
    flex-direction: row;

    > button {
      margin-right: 1.875rem;
    }
  }
`;