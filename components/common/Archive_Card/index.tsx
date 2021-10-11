import * as S from './home_archive_item.styles';
import Text from '../Text';
import ImageResponsive from '../ImageResponsive';
import parse from 'html-react-parser';
import { useRouter } from 'next/router';

const Archive_Card = ({ id, image, title, text }) => {
  const router = useRouter();

  return (
    <S.Archive_Card onClick={() => router.push(`/articles/${id}`)}>
      <S.Archive_Card_Image_Wrapper>
        <ImageResponsive
          src={image}
          maxWidthMediaQueries={[{ min: [350, 'md'] }, { min: [400, 'lg'] }]}
          minHeight={'270px'}
          objectFit={'cover'}
        />
      </S.Archive_Card_Image_Wrapper>
      <S.Archive_Card_Title_Wrapper>
        <Text fontWeight={600} fontSize={23}>
          {title}
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
          {parse(text)}
        </Text>
      </S.Archive_Card_Text_Wrapper>
      <S.Archive_Card_Text_Wrapper_Call_To_Action>
        Lire la suite
      </S.Archive_Card_Text_Wrapper_Call_To_Action>
    </S.Archive_Card>
  );
};

export default Archive_Card;
