import styled from 'styled-components';

export const FormContainer = styled.div`
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
