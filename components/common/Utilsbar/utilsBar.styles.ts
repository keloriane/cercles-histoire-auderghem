import styled, { css } from 'styled-components';
import { respondMax, respondMin } from 'styles/mixins';

export const UtilsBar = styled.div`
  display: flex;
  flex-direction: column;
  ${respondMax(
    'sm',
    css`
      align-items: center;
    `
  )}
  ${respondMin(
    'sm',
    css`
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    `
  )}
`;
