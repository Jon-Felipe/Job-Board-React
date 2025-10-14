import styled from 'styled-components';

export const ProfileLayoutContainer = styled.main`
  padding: 20px;
  max-width: 1440px;
  margin: 0 auto;

  .title {
    font-size: 18px;
  }

  .container {
    display: grid;
    row-gap: 20px;
  }

  .link-buttons {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }

  @media screen and (min-width: 1024px) {
    .title {
      font-size: 30px;
    }

    .container {
      grid-template-columns: 350px 1fr;
      column-gap: 20px;
    }

    .link-buttons {
      row-gap: 15px;
    }
  }
`;
