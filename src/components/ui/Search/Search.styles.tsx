import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 100%;

  .label {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
    font-weight: 500;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 15px;
  background-color: #fff;
  padding: 15px;
  border: 1px solid #d1d6db;
  border-radius: 10px;
  width: 100%;

  svg {
    color: #b4b3bc;
  }

  input {
    width: 100%;
    border: none;
    font-size: 16px;
    color: #111827;
  }

  input::placeholder {
    color: #b4b3bc;
  }

  input:focus {
    outline: none;
  }
`;
