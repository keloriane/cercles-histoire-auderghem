import React from 'react';
import parse from 'html-react-parser';
import * as S from './nieghbour_header.styles';
import Neighbour_Header_Filter_Input from '../Neighbour_Header_Filter_Input';
import { useFilterNeighbour } from '../../hooks/useFilterPost';
import Neighbour_Body from '../Neighbour_Body';

const Neighbour_Header_Filter: React.FC = () => {
  const { neighbours, handleChange, defaultNeighbour } = useFilterNeighbour();
  if (defaultNeighbour) {
  }

  return (
    <>
      <S.Neighbour_Header_Filter_Wrapper>
        {neighbours &&
          neighbours.map((neighbour) => (
            <Neighbour_Header_Filter_Input
              key={neighbour.quartier.nomQuartier}
              neighbourName={neighbour.quartier.nomQuartier}
              filter={() => handleChange(neighbour.id)}
              checked={neighbour.checked}
            />
          ))}
      </S.Neighbour_Header_Filter_Wrapper>
      {defaultNeighbour && (
        <Neighbour_Body
          title={defaultNeighbour && defaultNeighbour.quartier.nomQuartier}
          textArchive={parse(defaultNeighbour.quartier.archives)}
          imageArchive={defaultNeighbour.quartier.galleriePhotos[0].sourceUrl}
          imageGallery={defaultNeighbour.quartier.galleriePhotos[1].sourceUrl}
          idButton={defaultNeighbour.id}
          key={defaultNeighbour.id}
        />
      )}
    </>
  );
};
export default Neighbour_Header_Filter;
