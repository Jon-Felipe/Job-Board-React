import React from 'react';

// extras
import styles from './Button.module.css';

type Variant = 'primary' | 'secondary' | 'danger' | 'inverted' | 'text';

export type ButtonProps = {
  children: React.ReactNode;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onClick?: () => void;
  variant?: Variant;
  disabled?: boolean;
  isLoading?: boolean;
};

function Button({
  children,
  type = 'button',
  onClick,
  variant = 'primary',
  disabled = false,
  isLoading = false,
}: ButtonProps) {
  const isDisabled = isLoading || disabled;

  const cssClasses = [styles.button, styles[variant]].join(' ');

  return (
    <button
      type={type}
      onClick={onClick}
      className={cssClasses}
      disabled={isDisabled}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
}

export default Button;
