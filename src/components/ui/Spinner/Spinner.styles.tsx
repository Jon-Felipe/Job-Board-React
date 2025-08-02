import styled, { css } from 'styled-components';

// extras
import type { Size, Variant } from './Spinner';

const spinnerSizes: Record<Size, ReturnType<typeof css>> = {
  small: css`
    width: 15px;
    height: 15px;
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

const spinnerVariants: Record<Variant, ReturnType<typeof css>> = {
  primary: css`
    border-top-color: #202c39;
  `,
  secondary: css`
    border-top-color: #17a2b8;
  `,
  success: css`
    border-top-color: #28a745;
  `,
  danger: css`
    border-top-color: #dc3545;
  `,
};

export const SpinnerContainer = styled.div<{ $size: Size; $variant: Variant }>`
  border-style: solid;
  border-color: #e0e0e0;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin: 0 auto;

  ${(props) => spinnerSizes[props.$size]}
  ${(props) => spinnerVariants[props.$variant]}

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
