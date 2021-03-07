import styled from 'styled-components';

export const Container = styled.div`
  a {
    text-decoration: none;
    font-size: 1rem;
    font-weight: 800;
    color: #212353;
    display: flex;
    flex-direction: row;
    align-items: center;

    :hover {
      cursor: pointer;
    }
    
    svg {
      margin-left: 1rem;
    }
  }
`;
