import styled, { css } from 'styled-components';
import { respondMax, respondMin } from 'styles/mixins';
import { motion } from 'framer-motion';

export interface homeHeaderVariants {
  variants?: object | any;
}

export const Home_Header = styled(motion.div)<homeHeaderVariants>`
  ${respondMin(
    'sm',
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    `
  )}
  position: relative;
  z-index: 2;
`;

export const Home_Header_Wrapper = styled(motion.div)`
  max-width: 1200px;
  ${respondMin(
    'sm',
    css`
      display: flex;
      align-items: center;
    `
  )}
`;

export const Home_Header_Bg = styled(motion.div)`
  width: 100%;
  position: absolute;
  z-index: -5;
  background: #fffcf3;
  height: 100%;
  max-width: 886px;
  ${respondMin(
    'sm',
    css`
      width: 70%;
      max-height: 629px;
    `
  )}
  ${respondMin(
    'lg',
    css`
      width: 70%;
      max-height: 798px;
    `
  )}
`;

export const Home_Header_LeftWrapper = styled(motion.div)`
  ${respondMax(
    'sm',
    css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `
  )}
  ${respondMin(
    'md',
    css`
      min-width: 400px;
      max-width: 500px;
      padding-left: 24px;
    `
  )}
`;

export const Home_Header_RightWrapper = styled(motion.div)`
  position: relative;
  ${respondMax(
    'sm',
    css`
      padding: 32px;
    `
  )}
  .ImageWrapper {
    overflow: hidden;
  }
`;

export const Home_Header_Title = styled(motion.h1)`
  max-width: 650px;

  ${respondMax(
    'lg',
    css`
      max-width: 400px;
      line-height: 0.5;
    `
  )}
  ${respondMax(
    'sm',
    css`
      text-align: center;
      max-width: 400px;
      line-height: 1;
    `
  )}
  ${respondMax(
    'sm',
    css`
      max-width: 200px;
      line-height: 0.5;
    `
  )}
`;

export const Home_Header_Button_Wrapper = styled.div`
  margin: 24px 0px 24px;
  ${respondMin(
    'sm',
    css`
      margin-top: 40px;
    `
  )}
`;
