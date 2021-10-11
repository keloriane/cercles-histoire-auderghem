import React from 'react';
import * as S from './neighbour_header.style';
import ImageResponsive from '../common/ImageResponsive';
import Text from '../common/Text';

const Neighbour_Header: React.FC = () => {
  return (
    <S.Neighbour_Header_Wrapper>
      <S.Neighbour_Header_Title_Wrapper>
        <Text
          as={'h2'}
          fontSize={{
            min: 1.7,
            vw: 4,
            max: 4,
          }}
        >
          AUDERGHEM PAR QUARTIERS
        </Text>
      </S.Neighbour_Header_Title_Wrapper>
      <S.Neighbour_Header_Image_Wrapper>
        <ImageResponsive
          src={'/quartier_header.png'}
          maxWidthMediaQueries={[
            { min: [320, 'sm'] },
            { min: [490, 'md'] },
            { min: [677, 'lg'] },
          ]}
          objectFit={'cover'}
        />
      </S.Neighbour_Header_Image_Wrapper>
    </S.Neighbour_Header_Wrapper>
  );
};

export default Neighbour_Header;
