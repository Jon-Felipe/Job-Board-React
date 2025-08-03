import React from 'react';

// extras
import { LinkButtonContainer } from './LinkButton.styles';

export type Variant = 'primary' | 'secondary' | 'text';
export type Size = 'small' | 'medium' | 'large';

type LinkButtonProps = {
  path: string;
  children?: React.ReactNode;
  variant?: Variant;
  size?: Size;
};

function LinkButton({
  path,
  children,
  variant = 'primary',
  size = 'medium',
}: LinkButtonProps) {
  return (
    <LinkButtonContainer to={path} $variant={variant} $size={size}>
      {children}
    </LinkButtonContainer>
  );
}

export default LinkButton;
