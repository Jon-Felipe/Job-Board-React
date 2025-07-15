import React from 'react';

// extras
import styles from './Button.module.css';

type Variant = 'primary' | 'secondary' | 'danger' | 'inverted';

type ButtonProps = {
  children: React.ReactNode;
  variant?: Variant;
  disabled?: boolean;
  isLoading?: boolean;
};

function Button({
  children,
  variant = 'primary',
  disabled = false,
  isLoading = false,
}: ButtonProps) {
  const isDisabled = isLoading || disabled;

  const cssClasses = [styles.button, styles[variant]].join(' ');

  return (
    <button className={cssClasses} disabled={isDisabled}>
      {isLoading ? 'Loading...' : children}
    </button>
  );
}

export default Button;
