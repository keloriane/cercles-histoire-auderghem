import { fontFamily } from 'styles/theme';
import Text from 'components/common/Text';
import ImageResponsive from 'components/common/ImageResponsive';
import * as S from './header.styles';

export default function Header({ title, excerpt, source }) {
  return (
    <S.Header>
      <S.Header_Wrapper>
        <S.Header_LeftWrapper>
          <S.Header_Title>
            <S.Header_Title_Link href={'/neighbours'}>
              <S.Header_Title_Link_Image
                src="/arrrow.png"
                alt="backlink homepage"
              />
            </S.Header_Title_Link>
            <Text
              as={'span'}
              fontFamily={fontFamily.main}
              fontWeight={300}
              letterSpacing={'5px'}
              textTransform={'uppercase'}
              fontSize={'40px'}
              color={'#1A1A1A'}
            >
              {title}
            </Text>
          </S.Header_Title>
          <S.Header_Text>
            <Text
              display={'block'}
              lineHeight={1.5}
              maxWidth={420}
              fontFamily={fontFamily.main}
              fontWeight={400}
              fontSize={'16px'}
              maxLines={4}
            >
              {excerpt}
            </Text>
          </S.Header_Text>
        </S.Header_LeftWrapper>
        <S.Header_RightWrapper>
          <ImageResponsive
            src={source}
            maxWidthMediaQueries={[{ min: [450, 'md'] }, { min: [571, 'lg'] }]}
          />
        </S.Header_RightWrapper>
      </S.Header_Wrapper>
    </S.Header>
  );
}
