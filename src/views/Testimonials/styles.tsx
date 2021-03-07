import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 6.2rem;
  height: 44.31rem;
  background-color: #9C69E2;
  border-radius: 3.125rem;
  display: flex;
  flex-direction: column;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    padding: 6.81rem 5.81rem;

    h3 {    
      font-size: 2.5rem;
      color: #fff;
      margin: 0;
    }

    .testimonials-area {
      margin-top: 3rem;
      margin-left: 4.8rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      justify-items: center;
    }

    .arrows-area {
      margin-top: 2rem;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;

      svg {
        margin: 1rem;
        transition: all 0.2s;
        opacity: 0.5;

        :hover{
          cursor: pointer;
          opacity: 1;
        }
      }
    }
  }

`;