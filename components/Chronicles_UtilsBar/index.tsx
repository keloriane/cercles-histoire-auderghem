import React from 'react';
import * as S from './chronicles_utlisBar.styles';
import UtilsBar from '../common/Utilsbar';
import Text from '../common/Text';
import { fontFamily } from '../../styles/theme';

const Chronicles_UtilsBar = () => {
  return (
    <S.Chronicles_UtilsBar>
      <S.Chronicles_UtilsBar_InnerWrapper>
        <UtilsBar>
          <S.Chronicles_UtilsBar_FilterButton>
            <Text
              fontFamily={fontFamily.main}
              fontSize={'24px'}
              letterSpacing={'4px'}
              textTransform={'capitalize'}
            >
              Filtres
            </Text>
          </S.Chronicles_UtilsBar_FilterButton>
          <S.Chronicles_UtilsBar_DownloadLink>
            <S.Chronicles_UtilsBar_DownloadLink_InnerWrapper>
              <Text
                color={'#A62E44'}
                textTransform={'capitalize'}
                fontSize={'24px'}
                letterSpacing={'2px'}
              >
                Telecharger documents
              </Text>
              <S.Chronicles_UtilsBar_DownloadLink_Arrow
                src="/arrow_bottom.png"
                alt="backlink homepage"
              />
            </S.Chronicles_UtilsBar_DownloadLink_InnerWrapper>
          </S.Chronicles_UtilsBar_DownloadLink>
        </UtilsBar>
      </S.Chronicles_UtilsBar_InnerWrapper>
    </S.Chronicles_UtilsBar>
  );
};
export default Chronicles_UtilsBar;
