import styled, { css } from 'styled-components';
import { respondMax, respondMin } from 'styles/mixins';
import { motion } from 'framer-motion';

export const Home_Posts = styled.div``;

export const Home_Posts_GridWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  & > * {
    flex-shrink: 0;
  }
  ${respondMin(
    'md',
    css`
      margin-top: 100px;
      margin-bottom: 100px;
    `
  )}
  position: relative;
  z-index: 2;
`;

export const Home_Posts_Grid = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  ${respondMin(
    'sm',
    css`
      flex-direction: row;
      flex-wrap: wrap;
      column-gap: 24px;
      row-gap: 64px;
    `
  )}
  .ImageResponsive {
    overflow: hidden;
  }
`;

export const Home_Posts_Grid_Item = styled.div`
  flex: 30%;
  overflow: hidden;

  ${respondMax(
    'sm',
    css`
      margin-bottom: 24px;
    `
  )}
  & .ImageResponsive_Image {
    max-height: 270px;
    min-height: 270px;
  }

  &:nth-last-child(2),
  &:last-child {
    .ImageResponsive_Image {
      min-height: 300px;
      max-height: 300px;
    }
  }
  &:hover {
    cursor: pointer;
    opacity: 0.85;
    transition: all ease-in-out 300ms;
  }
`;

export const Home_Posts_Grid_Item_Date = styled(motion.h4)`
  font-weight: 600;
  font-size: 19px;
  line-height: 24px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(26, 26, 26, 0.59);
  margin: 0;
`;

export const Home_Posts_Grid_Item_Title = styled(motion.h3)`
  font-weight: 800;
  font-size: 23.4218px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.7);
  margin: 0;
`;
