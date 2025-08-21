import React from 'react';

// extras
import { BadgeContainer } from './Badge.styles';

export type BadgeSize = 'small' | 'medium' | 'large';

export type BadgeProps = {
  children: React.ReactNode | string;
  size?: BadgeSize;
};

function Badge({ children, size = 'medium' }: BadgeProps) {
  return <BadgeContainer $size={size}>{children}</BadgeContainer>;
}

export default Badge;
