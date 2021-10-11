import styled, { css } from 'styled-components';
import { respondMax, respondMin } from 'styles/mixins';
import { motion } from 'framer-motion';
import * as T from 'styles/theme';

export const Home_Gallery = styled(motion.section)`
  width: 100%;
  height: 80vh;
  background-image: url('/home_gallery_auderghem.png');
  background-size: 100% 100%;
  background-position: center center;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-origin: center center;
  position: relative;
  z-index: 2;
  ${respondMax(
    'sm',
    css`
      width: inherit;
    `
  )}
`;

export const Home_Gallery_Card = styled.aside`
  padding: 50px;
  background-color: #fff;
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
      width: 420px;
      height: auto;
    `
  )}
  ${respondMin(
    'md',
    css`
      display: flex;
      width: 636px;
      height: 344px;
      flex-direction: column;
      background-color: #fff;
    `
  )}
`;

export const Home_Gallery_Card_Sublink = styled.h4`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #000000;
`;

export const Home_Gallery_Card_Title = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 24.3478px;
  line-height: 150%;
  text-align: left;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  align-self: flex-start;
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
`;

export const Home_Gallery_Card_Link = styled.button`
  all: unset;
  color: ${T.colors.red};
  text-transform: uppercase;
  text-decoration: underline;
  font-size: 18px;
  font-weight: 800;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
  transition: all ease-in-out 300ms;
`;
