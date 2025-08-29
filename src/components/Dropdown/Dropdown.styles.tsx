import styled from 'styled-components';

export const DropdownContainer = styled.div`
  .toggle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    .title {
      font-size: 16px;
      font-weight: 500;
      color: rgb(110, 113, 134);
      margin-bottom: 0;
    }

    .icon {
      background-color: transparent;
      border: none;
      color: rgb(160, 162, 179);
      width: 20px;
      height: 20px;
    }
  }

  .options {
    padding: 15px;

    .optionContainer {
      display: flex;
      align-items: center;
      column-gap: 5px;
      font-size: 14px;
      text-transform: capitalize;
      color: #a0a2b3;
      margin-bottom: 15px;
    }
  }
`;
