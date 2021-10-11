import motion from 'framer-motion';
import * as S from './Loader.styles';
import React, { useEffect } from 'react';
import Text from '../common/Text';
import ImageResponsive from '../common/ImageResponsive';

const container = {
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.33, 0.4, 0.02, 0.99],
      duration: 1.4,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: [1, 0.24, 0.84, 0.57],
    },
  },
};

interface loaderImageAnimation {
  layoutId: object | any;
}

const Loader = ({ setLoading, layoutId }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <S.Loader_Wrapper
      className={'loader'}
      variants={container}
      onAnimationComplete={() => setLoading(false)}
      initial="hidden"
      animate="show"
      exit="exit"
      layoutId={'backgroundId'}
    >
      <S.Loader_Title_Wrapper variants={item}>
        <Text
          as={'h1'}
          fontSize={'60px'}
          color={'#A62E44'}
          textTransform={'uppercase'}
        >
          AUDERGHEM d’hier et d’aujourd’hui
        </Text>
      </S.Loader_Title_Wrapper>
      <ImageResponsive
        variants={item}
        position={'absolute'}
        right={'5%'}
        top={'5%'}
        src={'/loading_heronniere.png'}
        maxWidthMediaQueries={[{ min: [0, 'md'] }, { min: [400, 'lg'] }]}
      />
      <ImageResponsive
        variants={item}
        position={'absolute'}
        left={'15%'}
        top={'5%'}
        layoutId={layoutId}
        src={'/header.jpg'}
        transition={{ scale: 1.5 }}
      />
      <ImageResponsive
        variants={item}
        position={'absolute'}
        left={'5%'}
        bottom={'5%'}
        src={'/loading_rouge_cloitre.png'}
        maxWidthMediaQueries={[{ min: [0, 'md'] }, { min: [400, 'lg'] }]}
      />
      <ImageResponsive
        variants={item}
        position={'absolute'}
        right={'15%'}
        bottom={'5%'}
        src={'/loading_war.png'}
        maxWidthMediaQueries={[{ min: [0, 'md'] }, { min: [400, 'lg'] }]}
      />
    </S.Loader_Wrapper>
  );
};

export default Loader;
