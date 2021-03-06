import React from 'react';
import { ButtonStyled } from './styles';

export interface ButtonProps {
  isShadowed: boolean;
  backgroundColor?: string;
  children: any;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  backgroundColor,
  children,
  ...props
}) => {
  return (
    <ButtonStyled
      style={{ backgroundColor }}
      {...props}
    >
      {children}
    </ButtonStyled>
  )
}

export default Button;