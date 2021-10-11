import styled, { css } from 'styled-components';
import { respondMax } from 'styles/mixins';
import { Button } from '../Button/button.styles';
import * as T from 'styles/theme';

export const GalleryGrid_Wrapper = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GalleryGrid_List = styled.div`
  max-width: 1280px;
  margin: auto;
  column-count: 3;
  column-gap: 1em;
  ${respondMax(
    'xl',
    css`
      column-count: 3;
    `
  )}
  ${respondMax(
    'lg',
    css`
      column-count: 2;
    `
  )}
  ${respondMax(
    'md',
    css`
      column-count: 1;
    `
  )}
`;
export const GalleryGrid_Image_Wrapper = styled.div`
  ${respondMax(
    'sm',
    css`
      padding-left: 30px;
      padding-right: 30px;
    `
  )}
`;

export const GalleryGrid_Button = styled(Button)`
  background: ${T.colors.red};
  color: white;
  padding-top: 16px;
  margin: 32px 0 48px;
  text-transform: uppercase;
  font-weight: bold;
  font-family: ${T.fontFamily.main};
  ${respondMax(
    'sm',
    css`
      padding-left: 30px;
      padding-right: 30px;
    `
  )}
`;
