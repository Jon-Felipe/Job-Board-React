import React from 'react';
import { Link } from 'react-router';

type LinkButtonProps = {
  path: string;
  children: React.ReactNode;
};

function LinkButton({ path, children }: LinkButtonProps) {
  return <Link to={path}>{children}</Link>;
}

export default LinkButton;
