import React from 'react';

// extras
import styles from './Button.module.css';

type Variant = 'primary' | 'secondary' | 'danger';

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
  ...props
}: ButtonProps) {
  const isDisabled = isLoading || disabled;

  const cssClasses = [styles.button, styles[variant]].join(' ');

  return (
    <button className={cssClasses} disabled={isDisabled} {...props}>
      {isLoading ? 'Loading...' : children}
    </button>
  );
}

export default Button;
