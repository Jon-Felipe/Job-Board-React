import styled from 'styled-components';

export const JobsPageContainer = styled.main`
  .header {
    background-color: #fff;
    text-align: center;
    padding: 40px;
  }

  .header-title {
    font-size: 32px;
    font-weight: 600;
  }

  .header-text {
    font-size: 17px;
    color: #1d2445;
  }

  .jobsContainer {
    display: grid;
    align-items: start;
    row-gap: 20px;
    padding: 0 20px;
    max-width: 1700px;
    margin: 40px auto;
  }

  .jobsContainer-filters {
    background-color: #fff;
    border: 1px solid rgba(29, 36, 69, 0.1);
    border-radius: 10px;
    padding: 20px;
  }

  .jobsContainer-filterOptions {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    margin-bottom: 20px;
  }

  .jobs {
    display: grid;
    row-gap: 20px;
  }

  @media screen and (min-width: 768px) {
    .header-title {
      font-size: 44px;
    }

    .jobs {
      grid-template-columns: 1fr 1fr;
      column-gap: 20px;
    }
  }

  @media screen and (min-width: 1024px) {
    .jobsContainer {
      grid-template-columns: 250px 1fr;
      column-gap: 20px;
    }
  }

  @media screen and (min-width: 1440px) {
    .jobs {
      grid-template-columns: repeat(3, 1fr);
      column-gap: 20px;
    }
  }
`;

export const SpinnerContainer = styled.div`
  margin: 100px auto 0;
`;
