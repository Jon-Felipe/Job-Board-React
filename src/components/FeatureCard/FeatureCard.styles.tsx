import styled from 'styled-components';

export const FeatureCardContainer = styled.article`
  max-width: 400px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  .featureCard-header {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    border-bottom: 1px solid rgba(29, 36, 69, 0.15);

    h3 {
      font-size: 18px;
      font-weight: 600;
      margin: 0;
    }

    .featureCard-icon {
      margin-right: 10px;

      svg {
        width: 30px;
        height: 30px;
      }
    }
  }

  .featureCard-text {
    text-align: left;
    font-size: 16px;
    font-weight: 500;
    color: rgba(29, 36, 67, 0.75);
  }
`;
