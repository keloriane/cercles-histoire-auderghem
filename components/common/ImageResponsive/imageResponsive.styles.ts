import _ from 'lodash';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import {
  MaxWithMediaProps,
  MaxWidthMediaBuilder,
  MediaQueryAttributesPartial,
} from './MaxWidthMediaQueries';
import { ImageIF } from './index';

interface IImage extends MaxWithMediaProps, ImageIF {}

export const ImageWrapper = styled.div<IImage>`
  width: 100%;
  ${({ maxWidthMediaQueries }) => {
    const _MaxWidthMediaBuilder = new MaxWidthMediaBuilder();
    return _.map(
      maxWidthMediaQueries,
      (maxWidthMediaQuery: MediaQueryAttributesPartial) => {
        return _MaxWidthMediaBuilder.init(maxWidthMediaQuery);
      }
    );
  }}
`;

export const Image = styled(motion.img)<IImage>`
  width: 100%;
  ${({ minHeight }) =>
    minHeight &&
    css`
      min-height: ${minHeight};
    `}
  ${({ maxHeight }) =>
    maxHeight &&
    css`
      max-height: ${maxHeight};
    `}

  ${({ minWidth }) =>
    minWidth &&
    css`
      min-width: ${minWidth};
    `}

  ${({ objectFit }) =>
    objectFit &&
    css`
      object-fit: ${objectFit};
    `}
  ${({ position }) =>
    position &&
    css`
      position: ${position};
    `}
  ${({ left }) =>
    left &&
    css`
      left: ${left};
    `}
  ${({ right }) =>
    right &&
    css`
      right: ${right};
    `}
  ${({ top }) =>
    top &&
    css`
      top: ${top};
    `}
  ${({ bottom }) =>
    bottom &&
    css`
      bottom: ${bottom};
    `}
`;
