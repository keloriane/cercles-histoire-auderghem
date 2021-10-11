import React, { useEffect, useState } from 'react';
import { useQuery } from 'graphql-hooks';
import { formatDate } from 'Utils';
import * as S from './home_posts.styles';
import Home_Sections_Title from '../Home_Sections_Title';
import ImageResponsive from '../common/ImageResponsive';
import { HOMEPAGE_POSTS_QUERY } from '../../GraphqlQueries';
import AnimationWrapper from '../../Utils/AnimationWrapper';
import { goTo } from '../../Utils/helper';

export default function Home_Posts() {
  const { data } = useQuery(HOMEPAGE_POSTS_QUERY);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (data) {
      setPosts(data.posts.nodes);
    }
  }, [data]);

  const container = {
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    initial: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
    leave: {},
  };

  return (
    <S.Home_Posts>
      <Home_Sections_Title>Publications</Home_Sections_Title>
      <S.Home_Posts_GridWrapper>
        <S.Home_Posts_Grid>
          {posts &&
            posts.map((post, index) => (
              <S.Home_Posts_Grid_Item
                key={index}
                onClick={() => goTo(`/articles/${post.id}`)}
              >
                <ImageResponsive
                  variants={item}
                  objectFit={'cover'}
                  src={post.post_thumbnail.thumbnail.sourceUrl}
                  whileHover={{ scale: 1.3, transition: { duration: 5 } }}
                />
                <S.Home_Posts_Grid_Item_Date variants={item}>
                  {formatDate(post.modified)}
                </S.Home_Posts_Grid_Item_Date>
                <S.Home_Posts_Grid_Item_Title variants={item}>
                  {post.title}
                </S.Home_Posts_Grid_Item_Title>
              </S.Home_Posts_Grid_Item>
            ))}
        </S.Home_Posts_Grid>
      </S.Home_Posts_GridWrapper>
    </S.Home_Posts>
  );
}
