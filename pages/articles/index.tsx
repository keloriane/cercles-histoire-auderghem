import styled from 'styled-components';
import React, { useState } from 'react';
import { useQuery } from 'graphql-hooks';
import { POSTS_QUERY } from '../../query/posts.query';
import { produce } from 'immer';
import Posts_Grid from '../../components/Posts_Grid';

const Posts = () => {
  const [cursor, setCursor] = useState('');

  const { data: fetchMorePostsQuery } = useQuery(POSTS_QUERY, {
    variables: {
      cursor,
      first: 9,
    },
    updateData,
  });

  function updateData(prevPage, NextPage) {
    return produce(NextPage, (draftNextPage) => {
      draftNextPage.posts.edges = [
        ...prevPage.posts.edges,
        ...draftNextPage.posts.edges,
      ];
    });
    return NextPage;
  }

  function fetchMoreMedia() {
    if (fetchMorePostsQuery.posts.pageInfo.hasNextPage) {
      console.log(fetchMorePostsQuery.posts.pageInfo.endCursor);
      setCursor(fetchMorePostsQuery.posts.pageInfo.endCursor);
    }
  }

  if (fetchMorePostsQuery) {
    return (
      <Posts_Container>
        <Posts_Grid
          posts={fetchMorePostsQuery.posts.edges}
          loadMore={fetchMoreMedia}
        />
      </Posts_Container>
    );
  } else return <></>;
};

const Posts_Container = styled.div``;

export default Posts;
