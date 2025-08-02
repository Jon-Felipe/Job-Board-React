import styled, { css } from 'styled-components';

// extras
import type { Variant, Size } from './Button';

const buttonVariants: Record<Variant, ReturnType<typeof css>> = {
  primary: css`
    background-color: #202c39;
    color: #fff;
    border: none;

    &:hover {
      background-color: #4c5760;
    }
  `,
  outlined: css`
    background-color: transparent;
    color: #202c39;
    border: 1px solid #202c39;

    &:hover {
      color: #4c5760;
      border-color: #4c5760;
    }
  `,
  text: css`
    background-color: transparent;
    color: #202c39;
    border: none;
    text-decoration: underline;

    &:hover {
      color: #4c5760;
    }
  `,
};

const buttonSizes: Record<Size, ReturnType<typeof css>> = {
  small: css`
    font-size: 12px;
    padding: 8px 10px;
  `,
  medium: css`
    font-size: 14px;
    padding: 10px 12px;
  `,
  large: css`
    font-size: 16px;
    padding: 12px 15px;
  `,
};

export const ButtonContainer = styled.button<{
  $variant: Variant;
  $size: Size;
}>`
  display: inline-block;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;

  transition: all 0.2s ease-in-out;

  ${(props) => props.$variant && buttonVariants[props.$variant]}
  ${(props) => props.$size && buttonSizes[props.$size]}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const LoadingButtonContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 6px;

  p {
    margin: 0;
  }
`;
