import React from 'react';

// extras
import { FeatureCardContainer } from './FeatureCard.styles';

type FeatureCardProps = {
  icon?: React.ReactNode;
  title: string;
  text: string;
};

function FeatureCard({ icon, title, text }: FeatureCardProps) {
  return (
    <FeatureCardContainer className='featureCard'>
      <div className='featureCard-header'>
        {icon && <span className='featureCard-icon'>{icon}</span>}
        <h3>{title}</h3>
      </div>
      <p className='featureCard-text'>{text}</p>
    </FeatureCardContainer>
  );
}

export default FeatureCard;
