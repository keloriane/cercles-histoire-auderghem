import React from 'react';
import * as S from './home_sections_title.styles';
import Text from '../common/Text';

const Home_Sections_Title: React.FC = ({ children }) => {
  return (
    <S.Home_Sections_Title>
      <Text fontSize={'40px'} textTransform={'uppercase'}>
        {children}
      </Text>
    </S.Home_Sections_Title>
  );
};

export default Home_Sections_Title;
