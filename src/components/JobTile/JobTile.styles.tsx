import styled from 'styled-components';

export const JobTileContainer = styled.article`
  display: block;
  background-color: #fff;
  border: 1px solid rgba(29, 36, 69, 0.1);
  border-radius: 10px;
  width: 100%;
  padding: 24px 28px;
  text-align: center;

  .jobTile-title {
    color: rgba(29, 36, 69, 0.8);
    font-size: 16px;
  }

  .jobTile-industry,
  .jobTile-location,
  .jobTile-employmentType {
    color: rgba(29, 36, 69, 0.8);
    font-size: 14px;
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .jobTile-info {
      display: grid;
      place-items: center;
      grid-template-columns: repeat(3, 150px);
    }

    .jobTile-title {
      font-size: 1.4rem;
      margin-bottom: 0;
    }

    .jobTile-industry,
    .jobTile-location,
    .jobTile-employmentType {
      border-right: 1px solid #e7e7e7;
      padding-right: 20px;
      margin-bottom: 0;
    }
  }
`;
