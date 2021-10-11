import styled, { css } from 'styled-components';
import * as T from 'styles/theme';
import { respondMax, respondMin } from '../../styles/mixins';
import { Button } from '../common/Button/button.styles';

export const Neighbour_Body_Wrapper = styled.section`
  width: 100%;
  max-width: 1280px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    align-self: flex-start;
    line-height: 53px;
  }
`;

export const Neighbour__Body__Archive__Container = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  gap: 60px;
  ${respondMax(
    'md',
    css`
      flex-direction: column;
    `
  )}
`;
export const Neighbour__Body__Archive__Text__Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 550px;
  width: 100%;

  button {
    margin-top: 20px;
  }
`;

export const Neighbour__Body__Archive__Text__Button = styled(Button)`
  all: unset;
  background: ${T.colors.red};
  color: white;
  padding: 12px;
  max-width: 240px;
  display: flex;
  font-size: 18px;
  justify-content: center;
  align-items: center;
`;

export const Neighbour__Body__Archive__Image__Wrapper = styled.div``;
export const Neighbour__Body__Photos__Container = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row-reverse;
  gap: 60px;
  margin-top: 50px;
  padding: 20px;
  ${respondMax(
    'md',
    css`
      flex-direction: column;
    `
  )}
`;
export const Neighbour__Body__Photos__Text__Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 550px;
  width: 100%;
`;

export const Neighbour__Body__Photos__Text__Button = styled(Button)`
  all: unset;
  background: ${T.colors.red};
  color: white;
  padding: 12px;
  max-width: 240px;
  display: flex;
  font-size: 18px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const Neighbour__Body__Photos__Image__Wrapper = styled.div``;
export const Neighbour__Body__Gallery__Container = styled.div``;
