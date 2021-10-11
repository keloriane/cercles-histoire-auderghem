import * as S from './about_header.styles';
import ImageResponsive from '../common/ImageResponsive';
import Text from '../common/Text';

const About_Header = () => {
  return (
    <S.About_Header_Wrapper>
      <S.About_Header_Title>
        <Text
          as={'h2'}
          fontSize={'calc(55px + 6 * ((43vw - 320px) / 800))'}
          lineHeight={1.5}
          maxLines={4}
          letterSpacing={'-0.01em'}
          color={'rgba(0, 0, 0,1)'}
        >
          A propos du cercle d’histoire d’auderghem
        </Text>
      </S.About_Header_Title>
      <S.About_Header_Image>
        <ImageResponsive
          src={'/about_header.png'}
          maxWidthMediaQueries={[{ min: [350, 'md'] }, { min: [677, 'lg'] }]}
        />
      </S.About_Header_Image>
    </S.About_Header_Wrapper>
  );
};
export default About_Header;
