import React from 'react';

export type BadgeProps = {
  children: React.ReactNode;
};

function Badge({ children }: BadgeProps) {
  return <span>{children}</span>;
}

export default Badge;
