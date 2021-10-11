import styled, { css } from 'styled-components';
import { respondMax } from '../../styles/mixins';

export const Neighbour_Header_Wrapper = styled.header`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
  height: 50vh;
  ${respondMax(
    'sm',
    css`
      flex-direction: column;
    `
  )}
`;
export const Neighbour_Header_Title_Wrapper = styled.div`
  text-transform: uppercase;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Neighbour_Header_Image_Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
