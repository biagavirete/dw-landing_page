import React from 'react';
import { Container } from './styles';

export interface CircledIconProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  width: string;
  height: string;
  backgroundColor?: string;
  opacity?: string;
  children: any;
  onClick?: () => void;
}

const CircledIcon: React.FC<CircledIconProps> = ({
  backgroundColor,
  width,
  children,
  ...props
}) => {
  return (
    <Container
      width={width}
      backgroundColor={backgroundColor}
      {...props}
    >
      {children}
    </Container>
  )
}

export default CircledIcon;