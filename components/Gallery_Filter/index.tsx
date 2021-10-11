import * as S from './gallery_filter.styles';
import { MediaQueryAttributesPartial } from '../common/ImageResponsive/MaxWidthMediaQueries';
import React from 'react';
import Text from '../common/Text';
import { useShowFilterContext } from '../../context/showFilterContext';

export interface IGallery_Filter {
  categories: any[];
  handleFilterUpdate: (event: any) => Promise<void>;
}

const Gallery_Filter: React.FC<IGallery_Filter> = ({
  categories,
  handleFilterUpdate,
}) => {
  const { show, setShow } = useShowFilterContext();
  return (
    <S.Gallery_Filter show={show}>
      <button onClick={() => setShow(!show)}>Fermer</button>
      {categories.map((category) => (
        <S.Gallery_Filter_Item key={category.id}>
          <S.Gallery_Filter_Item_Checkbox
            type="checkbox"
            value={category.slug}
            onChange={handleFilterUpdate}
          />
          <S.Gallery_Filter_Item_Label>
            {' '}
            {category.slug}
          </S.Gallery_Filter_Item_Label>
        </S.Gallery_Filter_Item>
      ))}
    </S.Gallery_Filter>
  );
};

export default Gallery_Filter;
