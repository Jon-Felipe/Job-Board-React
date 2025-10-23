import styled from 'styled-components';

export const JobCardContainer = styled.article`
  background-color: #fff;
  border: 1px solid rgba(29, 36, 69, 0.1);
  border-radius: 10px;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  .jobCard-tabs {
    display: flex;
    align-items: center;
    column-gap: 10px;
    margin-bottom: 15px;
  }

  .jobCard-company {
    margin-bottom: 0;
    color: #1d2445;
    font-size: 14px;
  }

  .jobCard-title {
    text-align: start;
    color: #1d2445;
    text-transform: capitalize;
    font-size: 20px;
  }

  .jobCard-details {
    display: flex;
    align-items: flex-start;
    column-gap: 5px;
    margin-bottom: 15px;

    p,
    span {
      color: rgba(29, 36, 69, 0.8);
      font-size: 14px;
      margin-top: 0;
      margin-bottom: 0;
    }
  }
`;
