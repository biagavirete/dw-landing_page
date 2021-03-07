import styled from 'styled-components';
import { CircledIconProps } from './index';

export const Container = styled.a`
  display: flex;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;
  width: ${(props: CircledIconProps) => props.width};
  height: ${(props: CircledIconProps) => props.height};
  background-color: ${(props: CircledIconProps) => props.backgroundColor};
  opacity: ${(props: CircledIconProps) => props.opacity};
  border-radius: 50%;

  :hover {
    cursor: pointer;
  }
`;