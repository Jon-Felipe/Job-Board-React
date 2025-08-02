import React from 'react';

// extras
import { LinkButtonContainer } from './LinkButton.styles';

export type Variant = 'primary' | 'secondary' | 'text';

type LinkButtonProps = {
  path: string;
  children?: React.ReactNode;
  variant?: Variant;
};

function LinkButton({ path, children, variant = 'primary' }: LinkButtonProps) {
  return (
    <LinkButtonContainer to={path} $variant={variant}>
      {children}
    </LinkButtonContainer>
  );
}

export default LinkButton;
