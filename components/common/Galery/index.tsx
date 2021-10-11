import * as S from './galleryGrid.styles';
import ImageResponsive from '../ImageResponsive';
import SimpleReactLightbox from 'simple-react-lightbox';
import { SRLWrapper } from 'simple-react-lightbox';
import React from 'react';
import _ from 'lodash';

interface IGalleryGrid {
  images?: any[];
  fetchMore?: () => void;
}

const GalleryGrid: React.FC<IGalleryGrid> = ({ images, fetchMore }) => {
  return (
    <S.GalleryGrid_Wrapper>
      <S.GalleryGrid_List>
        <SimpleReactLightbox>
          <SRLWrapper class={'gallery_container'}>
            {_.map(images, (image, i) => {
              const _image = image.node ? image.node : image;
              return (
                <S.GalleryGrid_Image_Wrapper
                  className={`image-item-${i} image-item`}
                  key={_image.sourceUrl + i}
                >
                  <ImageResponsive src={_image.sourceUrl} />
                </S.GalleryGrid_Image_Wrapper>
              );
            })}
          </SRLWrapper>
        </SimpleReactLightbox>
      </S.GalleryGrid_List>
      {fetchMore && (
        <S.GalleryGrid_Button onClick={fetchMore}>
          CHARGER PlUS
        </S.GalleryGrid_Button>
      )}
    </S.GalleryGrid_Wrapper>
  );
};
export default GalleryGrid;
