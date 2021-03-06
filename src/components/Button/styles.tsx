import styled, { css } from 'styled-components';
import { ButtonProps } from '../Button';

export const ButtonStyled = styled.button<ButtonProps>`
  width: auto;
  min-width: 13rem;
  height: 3.5rem;
  border-radius: 3rem;
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
  padding: 0.5rem;
  font-size: 1rem;
  border: 0;
  color: #fff;
  background-color: ${(props: ButtonProps) => props.backgroundColor};

  svg {
    margin: 0 0 0 0.5rem;
  }

  :hover {
    cursor: pointer;
  }

  ${({ isShadowed }) =>
    isShadowed &&
    css`
      color: #212353;
      background-color: #fff;
      box-shadow: 0px 5px 5px rgba(75, 93, 104, 0.1);
      font-weight: 800;
    `
  }
`;