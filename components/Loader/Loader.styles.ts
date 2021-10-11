import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { respondMax } from '../../styles/mixins';

export const Loader_Wrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fffcf3;
  position: absolute;

  .ImageWrapper {
    overflow: hidden;
  }

  img {
    max-width: 500px;
  }

  .image-resize-mobile-view {
    ${respondMax(
      'sm',
      css`
        display: none;
      `
    )}
  }
`;
export const Loader_Title_Wrapper = styled(motion.div)`
  width: 60%;
  margin: auto;
  text-align: center;
  position: absolute;
  left: 20%;
  background-color: #fff;
  z-index: 2;
`;
