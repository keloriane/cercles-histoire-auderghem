import _ from 'lodash';
import React from 'react';
import * as S from './imageResponsive.styles';
import {
  MaxWithMediaProps,
  MediaQueryAttributesPartial,
} from './MaxWidthMediaQueries';

export interface ImageIF {
  src?: string;
  maxWidthMediaQueries?: Array<MediaQueryAttributesPartial>;
  minHeight?: string | number;
  maxHeight?: string | number;
  minWidth?: string | number;
  objectFit?: string;
  position?: string;
  left?: string;
  top?: string;
  bottom?: string;
  right?: string;
  layoutId?: object | any;
  transition?: object | any;
  variants?: object | any;
  whileHover?: object;
}

const ImageResponsive: React.FC<ImageIF> = (props) => {
  const { src } = props;
  const { maxWidthMediaQueries } = props;
  return (
    <S.ImageWrapper
      className={'ImageResponsive'}
      maxWidthMediaQueries={maxWidthMediaQueries}
    >
      <S.Image className={'ImageResponsive_Image'} {...props} src={src} />
    </S.ImageWrapper>
  );
};

export default ImageResponsive;
