import React from 'react';
import * as S from './grid.styled';
import ImageResponsive from '../ImageResponsive';

export interface IGrid {
  gridTemplateColumns?: string;
  gap?: string;
  rowGap?: string;
  columnGap?: string;
}

interface IRGrid extends React.PropsWithChildren<{}>, IGrid {}

const Grid: React.FC<IRGrid> = (props) => {
  return <S.Grid {...props} />;
};

export default Grid;
