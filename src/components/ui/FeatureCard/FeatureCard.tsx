import React from 'react';

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

function FeatureCard({ icon, title, text }: FeatureCardProps) {
  return (
    <article>
      <div>
        <span>{icon}</span>
        <h3>{title}</h3>
      </div>
      <p>{text}</p>
    </article>
  );
}

export default FeatureCard;
