import * as S from './posts_grid.styles';
import _ from 'lodash';
import React from 'react';
import Archive_Card from '../common/Archive_Card';
import Text from '../common/Text';
import * as T from '../../styles/theme';
import { useRouter } from 'next/router';

const Posts_Grid = ({ posts, loadMore }) => {
  return (
    <S.Posts_Grid>
      <S.Posts_Grid_Title>
        <Text
          textTransform={'uppercase'}
          fontSize={'48px'}
          fontWeight={800}
          color={T.colors.red}
        >
          Publications
        </Text>
      </S.Posts_Grid_Title>
      <S.Posts_Grid_List>
        {_.map(posts, (post, i) => {
          return (
            <Archive_Card
              key={post.node.id + i}
              id={`${post.node.id}`}
              image={post.node.post_thumbnail.thumbnail.sourceUrl}
              text={post.node.content}
              title={post.node.title}
            />
          );
        })}
      </S.Posts_Grid_List>
      <S.Posts_Grid_Button onClick={loadMore}>Charger Plus</S.Posts_Grid_Button>
    </S.Posts_Grid>
  );
};

export default Posts_Grid;
