import styled from 'styled-components';

export const Container = styled.div`
  width: 70rem;
  padding: 2.875rem 15rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  hr {
    margin-top: 6.2rem;
    width: 100vw;
    margin-left: -50vw;
    position: relative;
    left: 50%;
    height: 3px;
    background-color: rgba(156,105,226, 0.2);
    border: none;
  }
`;