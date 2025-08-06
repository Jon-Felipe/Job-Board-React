import styled from 'styled-components';

export const LoginPageContainer = styled.main`
  padding: 40px 20px;
  max-width: 550px;
  margin: 0 auto;

  .title {
    text-transform: capitalize;
    margin-top: 10px;
    font-size: 38px;
    font-weight: 700;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 100%;
`;

export const FormActions = styled.div`
  display: flex;
  align-items: center;
  column-gap: 4px;
  margin-top: 20px;

  p {
    margin-bottom: 0;
  }

  .button {
    max-width: 100px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    column-gap: 10px;
  }
`;
