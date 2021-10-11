import { colors, fontFamily, fontSize } from 'styles/theme';
import Button from 'components/common/Button';
import Text from 'components/common/Text';
import ImageResponsive from 'components/common/ImageResponsive';
import React from 'react';
import * as S from './home_header.styles';

const container = {
  show: {
    transform: {
      staggerChildren: 10,
    },
  },
};

const bgAnim = {
  hidden: {
    width: 0,
  },
  show: {
    opacity: 1,
    width: '100%',
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    width: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.6,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.6,
    },
  },
};

interface headerImg {
  layoutId: object | any;

  container?: object | any;
}

const Home_Header: React.FC<headerImg> = ({ layoutId }) => {
  return (
    <S.Home_Header variants={container}>
      <S.Home_Header_Wrapper>
        <S.Home_Header_Bg layoutId={'backgroundId'} />
        <S.Home_Header_LeftWrapper>
          <S.Home_Header_Title
            variants={item}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <Text
              fontFamily={fontFamily.main}
              fontWeight={500}
              textTransform={'uppercase'}
              fontSize={fontSize.title}
            >
              {' '}
              retrouvez les plus belles
              <Text
                fontFamily={fontFamily.main}
                fontWeight={500}
                fontSize={fontSize.title}
                textDecoration={'underline'}
                textDecorationColor={colors.red}
              >
                {' '}
                archives d’AUDERGHEM
              </Text>
            </Text>
          </S.Home_Header_Title>
          <S.Home_Header_Button_Wrapper>
            <Button link={'/about'} variants={item}>
              Découvrir
            </Button>
          </S.Home_Header_Button_Wrapper>
        </S.Home_Header_LeftWrapper>
        <S.Home_Header_RightWrapper>
          <ImageResponsive
            layoutId={layoutId}
            src={'/header.jpg'}
            maxWidthMediaQueries={[{ min: [450, 'md'] }, { min: [571, 'lg'] }]}
            transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
          />
        </S.Home_Header_RightWrapper>
      </S.Home_Header_Wrapper>
    </S.Home_Header>
  );
};
export default Home_Header;
