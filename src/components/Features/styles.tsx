import styled from 'styled-components';
import Logo from '../../assets/search.svg'

export const Container = styled.div`
  margin-top: 6.2rem;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 6.2rem;

  h3 {
    font-size: 2.5rem;
    color: #212353;
  }

  p {
    margin-top: 2rem;
    font-size: 1.125rem;
    color: #4B5D68;
  }
`;

export const Details = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-evenly;

  h5 {
    font-size: 1.5rem;
    color: #212353;
    font-weight: 400;
  }

  p {
    font-size: 1rem;
    color: #4B5D68;
  }

`;