import React from 'react';
import styles from './Tab.module.css';

type TabProps = {
  children: React.ReactNode;
};

function Tab({ children }: TabProps) {
  return (
    <div className={styles.tab}>
      <p className={styles.text}>{children}</p>
    </div>
  );
}

export default Tab;
