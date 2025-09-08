import styled from 'styled-components';

export const JobPageContainer = styled.main`
  display: grid;
  align-items: start;
  row-gap: 20px;
  padding: 40px;
  max-width: 1440px;
  margin: 0 auto;

  .jobCard {
    background-color: #fff;
    padding: 20px;
    border: 1px solid rgba(29, 36, 69, 0.1);
    border-radius: 10px;
  }

  .jobHeader {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #858c95;
    margin-bottom: 20px;

    .company {
      font-size: 18px;
      font-weight: 400;
      margin-bottom: 0;
    }

    .title {
      color: #05152e;
      font-size: 24px;
      font-weight: 700;
    }

    .postedDate {
      color: #858c95;
      font-size: 18px;
      font-weight: 400;
    }
  }

  .jobIndustry {
    display: inline-block;
    color: #47505c;
    background-color: #f6f7fa;
    letter-spacing: 0.75px;
    text-transform: uppercase;
    border-radius: 4px;
    padding: 8px 12px;
    font-size: 14px;
    margin-bottom: 0;
  }

  .jobFeatures {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    margin: 20px 0;

    p {
      margin-bottom: 0;
      letter-spacing: 0.75px;
      text-transform: uppercase;
      color: #47505c;
    }
  }

  .descriptionTitle {
    font-size: 24px;
    color: #05152e;
    font-weight: 700;
  }

  .descriptionText {
    color: #47505c;
    font-size: 18px;
  }

  .skillsTitle {
    font-size: 24px;
    color: #05152e;
    font-weight: 700;
  }

  .jobSkills {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    column-gap: 10px;
    row-gap: 10px;

    .skill {
      color: #47505c;
      font-size: 16px;
      list-style-type: none;
      background-color: #f6f7fa;
      box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.1);
      text-transform: uppercase;
      border-radius: 4px;
      padding: 8px 12px;
    }
  }

  .jobForm {
    .title {
      color: #05152e;
      font-size: 24px;
      font-weight: 700;
    }

    .inputs {
      display: flex;
      flex-direction: column;
      row-gap: 10px;
    }

    .cvTitle {
      display: inline-block;
      padding: 10px 20px;
      font-size: 16px;
      font-weight: 500;
      border: 2px solid #f4f4f6;
      border-radius: 5px;
      cursor: pointer;
    }

    .cvTitle span {
      margin-right: 10px;
      font-weight: 700;
    }

    .coverLetter {
      font-size: 16px;
      padding: 10px;
      border: 2px solid #f4f4f6;
      border-radius: 8px;
      width: 100%;
      resize: none;
      transition: border-color 0.3s ease;
    }

    .coverLetter:focus {
      border-color: #47505c;
      outline: none;
    }
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 350px;
    column-gap: 20px;

    .jobHeader {
      flex-direction: row;
      justify-content: space-between;
    }

    .jobFeatures {
      flex-direction: row;
      align-items: center;
      column-gap: 10px;

      p {
        font-size: 12px;
      }
    }

    .jobFeatures p:nth-child(1),
    .jobFeatures p:nth-child(2) {
      border-right: 1px solid #858c95;
      padding-right: 10px;
    }
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 450px;

    .jobFeatures {
      column-gap: 20px;

      p {
        font-size: 16px;
      }
    }

    .jobFeatures p:nth-child(1),
    .jobFeatures p:nth-child(2) {
      padding-right: 20px;
    }
  }
`;

export const SpinnerContainer = styled.div`
  margin: 200px auto 0;
`;
