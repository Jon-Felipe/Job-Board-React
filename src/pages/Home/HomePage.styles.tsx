import styled from 'styled-components';

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background-color: #f4f4f6;

  .text {
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    border-bottom: 1px solid rgba(29, 36, 69, 0.15);
  }

  .title {
    text-align: center;
    font-size: 35px;
  }

  .sub-text {
    text-align: center;
    font-size: 17px;
    font-weight: 600;
  }

  .search-form {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    width: 100%;
    margin-top: 20px;

    .search-input {
      width: 100%;
    }
  }

  .categories {
    display: flex;
    align-items: center;
    column-gap: 10px;
    margin-top: 10px;
  }

  .category-title {
    margin-bottom: 0;
  }

  .category-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    column-gap: 10px;
    li {
      text-decoration: none;
      list-style: none;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 60px 40px;
    .search-form {
      flex-direction: row;
      column-gap: 20px;
      max-width: 550px;

      button {
        max-width: 150px;
      }
    }
  }
`;

export const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  text-align: center;
  padding: 60px 40px;

  .text {
    font-size: 14px;
    font-weight: 700;
    border-bottom: 1px solid rgba(29, 36, 69, 0.15);
  }

  .title {
    font-size: 24px;
  }

  .features {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 50px;
    margin-top: 20px;
  }

  @media screen and (min-width: 768px) {
    .title {
      font-size: 34px;
    }
  }

  @media screen and (min-width: 1024px) {
    .title {
      font-size: 44px;
    }

    .features {
      flex-direction: row;
      column-gap: 50px;
    }
  }
`;
