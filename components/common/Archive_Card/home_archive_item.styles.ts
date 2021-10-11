import styled, { css } from 'styled-components';
import { respondMin, respondMax } from '../../../styles/mixins';
import Link from 'next/link';

export const Archive_Card = styled.a`
  ${respondMax(
    'sm',
    css`
      width: 300px;
      height: auto;
    `
  )}
  ${respondMin(
    'sm',
    css`
      width: 220px;
      height: auto;
    `
  )}
  ${respondMin(
    'md',
    css`
      display: flex;
      width: 400px;

      flex-direction: column;
      background-color: #fff;
    `
  )}
  ${respondMax(
    'md',
    css`
      display: flex;
      width: 350px;

      flex-direction: column;
      background-color: #fff;
    `
  )}
`;
export const Archive_Card_Image_Wrapper = styled.div`
  width: 100%;
`;

export const Archive_Card_Image = styled.img`
  width: 100%;
`;

export const Archive_Card_Title_Wrapper = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 22.69px;
  line-height: 145.1%;
  /* or 33px */

  letter-spacing: -0.01em;
  text-transform: uppercase;

  color: #000000;
  padding: 10px;
`;
export const Archive_Card_Text_Wrapper = styled.div`
  line-height: 145.1%;
  letter-spacing: -0.01em;
  max-lines: 1;
  color: rgba(26, 26, 26, 0.8);
  padding: 10px;
`;
export const Archive_Card_Text_Wrapper_Call_To_Action = styled.p`
  text-decoration: none;
  color: #a62e44;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 145.1%;
  letter-spacing: -0.01em;
  text-align: right;
`;
