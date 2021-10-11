import * as S from './about_text_section.styles';
import Text from '../common/Text';

const About_Text_Section = () => {
  return (
    <S.About_Text_Section_Wrapper>
      <S.About_Text_Section_Wrapper_Title>
        <Text as={'h2'} fontSize={'36px'} textTransform={'uppercase'}>
          auderghem d’hier et d’aujourd’hui
        </Text>
      </S.About_Text_Section_Wrapper_Title>
      <S.About_Text_Section_Wrapper_Text>
        <Text
          as={'p'}
          fontSize={'18px'}
          lineHeight={1.5}
          letterSpacing={'-0.01em'}
          color={'rgba(0, 0, 0,1)'}
        >
          L’histoire de la localité, située au sud-est de Bruxelles le long de
          la Woluwe, est riche d’événements historiques, culturels, artistiques
          et religieux. A l’origine, Auderghem n’était qu’une simple
          exploitation agricole rattachée à Watermael et nichée au creux de la
          vaste clairière formée par la vallée de la Woluwe. Quant au nom,
          Oudrenghem, il n’apparut qu’en 1251. On lui prête du reste plusieurs
          significations : ancienne habitation, demeure des ancêtres, etc. Vers
          la fin du IX e siècle, d’autres exploitations s’ajoutèrent et
          formèrent un petit hameau regroupant une vingtaine de maisons abritant
          paysans, bûcherons et faiseurs de balais. Ces familles vivaient de
          l’exploitation de la forêt.
        </Text>
      </S.About_Text_Section_Wrapper_Text>
    </S.About_Text_Section_Wrapper>
  );
};
export default About_Text_Section;
