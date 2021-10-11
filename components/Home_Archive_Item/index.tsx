import * as S from './home_archive_item.styles';
import Text from '../common/Text';
import ImageResponsive from '../common/ImageResponsive';

export const Home_Archive_Item = (props) => {
  return (
    <S.Archive_Card onClick={props.link}>
      <S.Archive_Card_Image_Wrapper>
        <ImageResponsive
          src={props.image}
          maxWidthMediaQueries={[{ min: [350, 'md'] }, { min: [400, 'lg'] }]}
          minHeight={'270px'}
          objectFit={'cover'}
        />
      </S.Archive_Card_Image_Wrapper>
      <S.Archive_Card_Title_Wrapper>
        <Text fontWeight={600} fontSize={23}>
          {props.title}
        </Text>
      </S.Archive_Card_Title_Wrapper>
      <S.Archive_Card_Text_Wrapper>
        <Text
          fontSize={'17px'}
          lineHeight={1.5}
          maxLines={4}
          letterSpacing={'-0.01em'}
          color={'rgba(26, 26, 26, 0.8)'}
        >
          {props.text}
        </Text>
      </S.Archive_Card_Text_Wrapper>
      <S.Archive_Card_Text_Wrapper_Call_To_Action>
        Lire la suite
      </S.Archive_Card_Text_Wrapper_Call_To_Action>
    </S.Archive_Card>
  );
};
