import styled from 'styled-components';

export const FeatureCardContainer = styled.article`
  max-width: 400px;

  .featureCard-header {
    display: flex;
    align-items: center;
    column-gap: 10px;
    margin-bottom: 30px;
    border-bottom: 1px solid rgba(29, 36, 69, 0.15);

    h3 {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 0;
    }

    .featureCard-icon svg {
      width: 30px;
      height: 30px;
    }
  }

  .featureCard-text {
    text-align: left;
    font-size: 16px;
    font-weight: 500;
    color: rgba(29, 36, 67, 0.75);
  }
`;
