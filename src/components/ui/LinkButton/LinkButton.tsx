import React from 'react';
import { Link } from 'react-router';

// extras
import styles from './LinkButton.module.css';

type Variant = 'primary';

type LinkButtonProps = {
  path: string;
  children: React.ReactNode;
  variant?: Variant;
};

function LinkButton({ path, children, variant = 'primary' }: LinkButtonProps) {
  const cssClasses = [styles.link, styles[variant]].join(' ');

  return (
    <Link to={path} className={cssClasses}>
      {children}
    </Link>
  );
}

export default LinkButton;
