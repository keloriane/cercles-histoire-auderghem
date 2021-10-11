import * as S from './neighbour_body.styles';
import Text from '../common/Text';
import ImageResponsive from '../common/ImageResponsive';
import Button from './../common/Button';
import { useRouter } from 'next/router';

const Neighbour_Body = (props) => {
  const router = useRouter();
  return (
    <S.Neighbour_Body_Wrapper>
      <Text as={'h2'} fontSize={'47px'}>
        {props.title}
      </Text>
      <S.Neighbour__Body__Archive__Container>
        <S.Neighbour__Body__Archive__Text__Wrapper>
          <Text
            as={'h3'}
            fontWeight={600}
            fontSize={'36px'}
            letterSpacing={'0.1rem'}
            textTransform={'uppercase'}
          >
            Archive
          </Text>
          <Text fontSize={'16px'}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos ex
            labore nemo, optio placeat quibusdam quod rem repellat sit ut!
            Debitis dolore explicabo illo nihil nobis perspiciatis recusandae
            sint sunt!Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Eos ex labore nemo, optio placeat quibusdam quod rem repellat sit
            ut! Debitis dolore explicabo illo nihil nobis perspiciatis
            recusandae sint sunt!Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Eos ex labore nemo, optio placeat quibusdam quod
            rem repellat sit ut! Debitis dolore explicabo illo nihil nobis
            perspiciatis recusandae sint sunt!Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Eos ex labore nemo, optio placeat
            quibusdam quod rem repellat sit ut! Debitis dolore explicabo illo
            nihil nobis perspiciatis recusandae sint sunt!
          </Text>
          <S.Neighbour__Body__Archive__Text__Button
            onClick={() => router.push(`/neighbours/${props.idButton}/archive`)}
          >
            voir l’archive complète
          </S.Neighbour__Body__Archive__Text__Button>
        </S.Neighbour__Body__Archive__Text__Wrapper>
        <S.Neighbour__Body__Archive__Image__Wrapper>
          <ImageResponsive
            maxWidthMediaQueries={[
              { min: [478, 'sm'] },
              { min: [450, 'md'] },
              { min: [571, 'lg'] },
            ]}
            src={props.imageArchive}
            maxHeight={350}
          />
        </S.Neighbour__Body__Archive__Image__Wrapper>
      </S.Neighbour__Body__Archive__Container>
      <S.Neighbour__Body__Photos__Container>
        <S.Neighbour__Body__Photos__Text__Wrapper>
          <Text
            as={'h3'}
            fontWeight={600}
            fontSize={'36px'}
            letterSpacing={'0.1rem'}
            textTransform={'uppercase'}
          >
            Photos
          </Text>
          <Text fontSize={'16px'}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos ex
            labore nemo, optio placeat quibusdam quod rem repellat sit ut!
            Debitis dolore explicabo illo nihil nobis perspiciatis recusandae
            sint sunt!Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Eos ex labore nemo, optio placeat quibusdam quod rem repellat sit
            ut! Debitis dolore explicabo illo nihil nobis perspiciatis
            recusandae sint sunt!Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Eos ex labore nemo, optio placeat quibusdam quod
            rem repellat sit ut! Debitis dolore explicabo illo nihil nobis
            perspiciatis recusandae sint sunt!Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Eos ex labore nemo, optio placeat
            quibusdam quod rem repellat sit ut! Debitis dolore explicabo illo
            nihil nobis perspiciatis recusandae sint sunt!
          </Text>
          <S.Neighbour__Body__Photos__Text__Button
            onClick={() => router.push(`/neighbours/${props.idButton}/galerie`)}
          >
            voir toutes les photos
          </S.Neighbour__Body__Photos__Text__Button>
        </S.Neighbour__Body__Photos__Text__Wrapper>
        <S.Neighbour__Body__Photos__Image__Wrapper>
          <ImageResponsive
            maxWidthMediaQueries={[
              { min: [478, 'sm'] },
              { min: [450, 'md'] },
              { min: [571, 'lg'] },
            ]}
            src={props.imageGallery}
            maxHeight={350}
          />
        </S.Neighbour__Body__Photos__Image__Wrapper>
      </S.Neighbour__Body__Photos__Container>
      <S.Neighbour__Body__Gallery__Container />
    </S.Neighbour_Body_Wrapper>
  );
};

export default Neighbour_Body;
