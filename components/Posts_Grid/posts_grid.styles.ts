import styled, { css } from 'styled-components';
import { respondMin } from 'styles/mixins';
import { GalleryGrid_Button } from '../common/Galery/galleryGrid.styles';

export const Posts_Grid = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Posts_Grid_Title = styled.div`
  margin-top: 32px;
`;

export const Posts_Grid_List = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 56px;
  ${respondMin(
    'md',
    css`
      grid-column-gap: 24px;
      grid-template-columns: 1fr 1fr;
    `
  )}
  ${respondMin(
    'lg',
    css`
      grid-column-gap: 24px;
      grid-template-columns: 1fr 1fr 1fr;
    `
  )}
`;

export const Posts_Grid_Button = styled(GalleryGrid_Button)`
  box-sizing: border-box;
  min-width: 180px;
  display: flex;
  justify-content: center;
`;
