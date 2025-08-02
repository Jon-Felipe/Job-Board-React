import styled, { css } from 'styled-components';

// extras
import type { Size } from './Spinner';

const sizeStyle: Record<Size, ReturnType<typeof css>> = {
  small: css`
    width: 20px;
    height: 20px;
    border-width: 2px;
  `,
  medium: css`
    width: 40px;
    height: 40px;
    border-width: 4px;
  `,
  large: css`
    width: 60px;
    height: 60px;
    border-width: 6px;
  `,
};

export const SpinnerContainer = styled.div<{ $size: Size }>`
  border-style: solid;
  border-color: #e0e0e0;
  border-top-color: #202c39;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin: 0 auto;

  ${(props) => sizeStyle[props.$size]}

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
