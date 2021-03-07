import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 6.2rem;
  height: 35rem;
  border-radius: 3.125rem;
  background: rgba(240, 99, 184, 0.15);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  align-items: center;

  .image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 28rem; */

    img {
      width: 29.81rem;
      height: 31.5rem;
      margin-right: 3.875rem;
    }
  }

  .text-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: start;
    padding: 7.8rem 5.75rem 7.8rem 0;

    h3 {
      font-size: 2.5rem;
      color: #212353;
    }

    p {
      font-size: 1.125rem;
      color: #4B5D68;
      line-height: 1.8rem;
    }
  }
`;