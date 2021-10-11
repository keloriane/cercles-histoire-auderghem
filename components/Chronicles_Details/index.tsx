import * as S from './chronicle_details';
import Text from '../common/Text';
import React from 'react';

const Chronicles_Details = ({ textArchive, titleArchive }) => {
  return (
    <S.Chronicle_Details_Wrapper>
      <Text
        fontWeight={800}
        fontSize={'28px'}
        lineHeight={2}
        color={'black'}
        textTransform={'uppercase'}
      >
        {titleArchive}
      </Text>
      <Text
        fontWeight={500}
        fontSize={'17px'}
        lineHeight={1.5}
        color={'rgba(26, 26, 26, 0.92)'}
      >
        {textArchive}
      </Text>
    </S.Chronicle_Details_Wrapper>
  );
};

export default Chronicles_Details;
