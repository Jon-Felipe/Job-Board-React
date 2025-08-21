import styled, { css } from 'styled-components';

// extras
import type { BadgeSize } from './Badge';

const badgeSizes: Record<BadgeSize, ReturnType<typeof css>> = {
  small: css`
    font-size: 12px;
    padding: 2px 10px;
    border-radius: 4px;
  `,
  medium: css`
    font-size: 14px;
    padding: 4px 12px;
    border-radius: 6px;
  `,
  large: css`
    font-size: 16px;
    padding: 6px 14px;
    border-radius: 8px;
  `,
};

export const BadgeContainer = styled.div<{ $size: BadgeSize }>`
  background-color: #fff;
  color: #1f2937;
  border: 1px solid #a3a3a3;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  ${(props) => props.$size && badgeSizes[props.$size]}
`;
