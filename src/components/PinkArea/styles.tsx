import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 6.2rem;
  width: 60rem;
  height: auto;
  border-radius: 3.125rem;
  background: rgba(240, 99, 184, 0.15);
  padding: 0 3rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  align-items: center;

  .image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24rem;
    margin-right: 3rem;

    width: 29.81rem;
    height: 31.5rem;
  }

  .text-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: start;
    width: 36rem;

    h3 {
      font-size: 2.5rem;
      color: #212353;
    }

    p {
      font-size: 1.125rem;
      color: #4B5D68;
    }
  }
`;