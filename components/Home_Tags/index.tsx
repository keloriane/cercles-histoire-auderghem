import * as S from './home_tags.styles';
import { useQuery } from 'graphql-hooks';
import { useEffect, useState } from 'react';
import { HOME_TAGS_QUERY } from './../../query/home_tags.query';
import Home_Tag from '../Home_Tag/Home_Tag';

const Home_Tags = () => {
  const { data } = useQuery(HOME_TAGS_QUERY);
  const [tags, setTags] = useState([]);
  useEffect(() => {
    if (data) {
      setTags(data.categories.nodes);
    }
  }, [tags, data]);
  return (
    <S.Home_Tags_section>
      <S.Home_Tags_Section_Tags_Wrapper>
        <S.Home_Tags_Section_Tags_Wrapper_Title>
          Les Tags le plus populaires
        </S.Home_Tags_Section_Tags_Wrapper_Title>
        <S.Home_Tags_Section_Wrapper_Tags_List>
          {tags.map((tag) => (
            <Home_Tag tagName={tag.name} key={tag.name} />
          ))}
        </S.Home_Tags_Section_Wrapper_Tags_List>
      </S.Home_Tags_Section_Tags_Wrapper>
    </S.Home_Tags_section>
  );
};
export default Home_Tags;
