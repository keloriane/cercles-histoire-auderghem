import * as S from './footer_style';
import Text from '../common/Text';

const Footer = () => {
  return (
    <S.Footer>
      <S.Footer_Inner>
        <S.Footer_Logo_Container>
          <S.Footer_Logo>
            Le Cercle d{"'"}Histoire <br /> d{"'"}Auderghem
          </S.Footer_Logo>
        </S.Footer_Logo_Container>
        <S.Footer_Text_Container>
          <Text as={'h2'} fontSize={27} fontWeight={450}>
            A propos
          </Text>
          <Text fontSize={'16px'} fontWeight={300}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            mauris ligula, aliquet ac auctor non, luctus in eros. Mauris
            interdum sapien at ante tempus, at molestie est cursus. Mauris
            scelerisque, orci nec iaculis facilisis, enim ipsum lacinia urna, at
            eleifend purus risus vel urna. Aliquam quis dolor eget justo
            hendrerit ullamcorper at sed velit.
          </Text>
        </S.Footer_Text_Container>
      </S.Footer_Inner>
    </S.Footer>
  );
};
export default Footer;
