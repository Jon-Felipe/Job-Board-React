import styled from 'styled-components';

export const ProfilePageContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 14px;

  .personal-info,
  .address {
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    margin-bottom: 15px;

    h4 {
      margin-bottom: 0;
    }
  }

  @media screen and (min-width: 1024px) {
    .heading {
      font-size: 22px;
    }

    .row {
      display: flex;
      flex-direction: row;
      column-gap: 15px;
    }

    .save-btn {
      display: flex;
      justify-content: flex-end;

      button {
        width: auto;
      }
    }
  }
`;
