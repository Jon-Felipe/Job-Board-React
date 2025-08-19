import { Link } from 'react-router';
import styled, { css } from 'styled-components';

// extras
import type { Size, Variant } from './LinkButton';

const buttonVariants: Record<Variant, ReturnType<typeof css>> = {
  primary: css`
    background-color: #202c39;
    color: #fff;

    &:hover {
      color: #f4f4f6;
      background-color: #354554;
    }
  `,
  secondary: css`
    background-color: #fff;
    color: #202c39;
    border: 1px solid #202c39;

    &:hover {
      background-color: #202c39;
      color: #f4f4f6;
    }
  `,
  text: css`
    background-color: transparent;
    color: #202c39;
  `,
};

const sizeVariants: Record<Size, ReturnType<typeof css>> = {
  small: css`
    font-size: 14px;
    padding: 8px 12px;
  `,
  medium: css`
    font-size: 16px;
    padding: 10px 14px;
  `,
  large: css`
    font-size: 18px;
    padding: 12px 16px;
  `,
};

export const LinkButtonContainer = styled(Link)<{
  $variant: Variant;
  $size: Size;
}>`
  display: block;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 600;
  text-align: center;
  border-radius: 10px;
  text-decoration: none;
  cursor: pointer;

  transition: background-color 0.3s ease-in;

  ${(props) => buttonVariants[props.$variant]}
  ${(props) => sizeVariants[props.$size]}
`;
