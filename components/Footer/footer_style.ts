import styled, { css } from 'styled-components';
import { respondMax } from '../../styles/mixins';

export const Footer = styled.footer`
  background: #a62e44;
  height: auto;
  position: absolute;
  width: 100%;
  margin-top: 64px;
`;

export const Footer_Inner = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  ${respondMax(
    'sm',
    css`
      bottom: -500px;
      justify-content: center;
    `
  )}
`;

export const Footer_Logo_Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;
export const Footer_Logo = styled.h2`
  font-style: normal;
  font-weight: 200;
  font-size: 48px;
  line-height: 62px;
  color: #ffffff;
  display: flex;
  align-items: center;
  ${respondMax(
    'sm',
    css`
      font-size: 24px;
      line-height: 28px;
    `
  )}
`;

export const Footer_Text_Container = styled.div`
  font-style: normal;
  font-weight: 450;
  font-size: 16px;
  line-height: 21px;
  color: #ffffff;
  width: 100%;
  max-width: 400px;
  padding: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;
