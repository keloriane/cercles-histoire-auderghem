import * as S from './home_gallery.styles';
import Text from '../common/Text';
import { fontFamily, fontSize } from '../../styles/theme';
import { InView } from 'react-intersection-observer';

const backgroundAnim = {
  initial: {
    backgroundSize: '150%',
    duration: 0.5,
  },
  show: {
    backgroundSize: '100%',
    transition: {
      duration: 1.5,
      ease: 'anticipate',
    },
  },
};

const Home_Gallery = () => {
  return (
    <InView>
      {({ ref, inView }) => (
        <S.Home_Gallery
          ref={ref}
          variants={backgroundAnim}
          initial={'initial'}
          animate={inView ? 'show' : 'initial'}
        >
          <S.Home_Gallery_Card>
            <S.Home_Gallery_Card_Sublink>
              Avez vous lu notre livre ?
            </S.Home_Gallery_Card_Sublink>
            <S.Home_Gallery_Card_Title color={'#B92C45'}>
              visitez NOS GALLERIES.
            </S.Home_Gallery_Card_Title>
            <Text
              as={'p'}
              fontFamily={fontFamily.main}
              fontSize={fontSize.text}
              color={'black'}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </Text>
            <S.Home_Gallery_Card_Link>
              Acheter Notre Livre
            </S.Home_Gallery_Card_Link>
          </S.Home_Gallery_Card>
        </S.Home_Gallery>
      )}
    </InView>
  );
};

export default Home_Gallery;
