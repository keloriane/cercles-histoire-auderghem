import { colors } from 'styles/theme';
import styled, { css } from 'styled-components';
import { IGrid } from './index';

export const Grid = styled.div<IGrid>`
  display: flex;

  ${({ gap }) =>
    gap &&
    css`
      row-gap: ${gap};
    `};

  ${({ rowGap }) =>
    rowGap &&
    css`
      row-gap: ${rowGap};
    `};

  ${({ columnGap }) =>
    columnGap &&
    css`
      column-gap: ${columnGap};
    `};

  ${({ gridTemplateColumns }) =>
    gridTemplateColumns &&
    css`
      grid-template-columns: ${gridTemplateColumns};
    `};
`;
