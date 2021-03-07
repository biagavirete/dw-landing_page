import styled from 'styled-components';

export const Container = styled.div`
  width: 40.31rem;
  height: 15rem;
  border-radius: 1.25rem;
  background-color: #fff;
  box-shadow: 0px 20px 0px rgba(156, 105, 226, 0.3);
  padding: 3.75rem 4.375rem 3.125rem 4.375rem;
  position: relative;
  z-index: 10;

  .inner-content {
    display: flex;
    flex-direction: column;

    .top {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-items: center;
    
    img {
      width: 5.625rem;
      height: 5.625rem;
      border-radius: 50%;
      margin-right: 1.875rem;
    }

    .title-area {
      strong {
        font-size: 1.125rem;
        color: #212353;
      }

      p {
        margin-top: 0;
        font-size: 0.875rem;
        color: #9C69E2;
      }
    }
    }

  .bottom {
    display: flex;
    flex-direction: column;
    margin-left: 7.527rem;

    p {
      font-size: 1.125rem;
      line-height: 2rem;
    }
  }
  }
`;