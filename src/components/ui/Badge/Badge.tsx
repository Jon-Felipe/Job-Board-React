import React from 'react';

// extras
import { BadgeContainer } from './Badge.styles';

export type BadgeSize = 'small' | 'medium' | 'large';

export type BadgeProps = {
  children: React.ReactNode | string;
  size?: BadgeSize;
  rounded?: boolean;
};

function Badge({ children, size = 'medium', rounded = false }: BadgeProps) {
  return (
    <BadgeContainer $size={size} $rounded={rounded}>
      {children}
    </BadgeContainer>
  );
}

export default Badge;
