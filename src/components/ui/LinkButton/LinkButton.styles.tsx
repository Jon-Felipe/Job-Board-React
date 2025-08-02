import { Link } from 'react-router';
import styled, { css } from 'styled-components';

// extras
import type { Variant } from './LinkButton';

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

    &:hover {
      text-decoration: underline;
    }
  `,
};

export const LinkButtonContainer = styled(Link)<{ $variant: Variant }>`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
  font-weight: 600;
  padding: 10px 15px;
  border-radius: 10px;
  text-decoration: none;
  cursor: pointer;

  transition: background-color 0.3s ease-in;

  ${(props) => buttonVariants[props.$variant]}
`;
