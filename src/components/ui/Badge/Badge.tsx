import React from 'react';

// extras
import { BadgeContainer } from './Badge.styles';

export type BadgeProps = {
  children: React.ReactNode | string;
};

function Badge({ children }: BadgeProps) {
  return <BadgeContainer>{children}</BadgeContainer>;
}

export default Badge;
