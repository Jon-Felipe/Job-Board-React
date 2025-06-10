import React from 'react';

// extras
import styles from './Button.module.css';

type ButtonProps = { children: React.ReactNode };

function Button({ children }: ButtonProps) {
  return <button className={styles.button}>{children}</button>;
}

export default Button;
