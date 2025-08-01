import React from 'react';

// extras
import { ButtonContainer } from './Button.styles';

export type Variant = 'primary' | 'outlined' | 'text';
export type Size = 'small' | 'medium' | 'large';

export type ButtonProps = {
  type: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  children?: React.ReactNode | string;
  size?: Size;
  variant?: Variant;
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
};

function Button({
  type = 'button',
  children,
  size = 'medium',
  variant = 'primary',
  disabled = false,
  isLoading = false,
  onClick,
}: ButtonProps) {
  const isDisabled = isLoading || disabled;

  return (
    <ButtonContainer
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      $size={size}
      $variant={variant}
    >
      {isLoading ? 'Loading...' : children}
    </ButtonContainer>
  );
}

export default Button;
