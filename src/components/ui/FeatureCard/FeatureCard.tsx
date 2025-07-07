import React from 'react';
import styles from './FeatureCard.module.css';

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

function FeatureCard({ icon, title, text }: FeatureCardProps) {
  return (
    <article className={styles.featureCard}>
      <div className={styles.header}>
        <span className={styles.icon}>{icon}</span>
        <h3>{title}</h3>
      </div>
      <p className={styles.text}>{text}</p>
    </article>
  );
}

export default FeatureCard;
