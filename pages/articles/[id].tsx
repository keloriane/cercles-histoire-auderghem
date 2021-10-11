import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useManualQuery } from 'graphql-hooks';
import parse from 'html-react-parser';
import { POST_QUERY } from '../../query/posts.query';
import { fontFamily } from '../../styles/theme';
import Text from '../../components/common/Text';
import Post_Content from '../../components/Post_Content';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const [fetchPost, { data }] = useManualQuery(POST_QUERY, {
    variables: {
      id: id,
    },
  });

  useEffect(() => {
    if (id) {
      fetchPost();
    }
  }, [id]);

  if (data) {
    console.log(data);
    return (
      <Post_Container>
        <Text
          as={'span'}
          fontFamily={fontFamily.main}
          fontWeight={300}
          letterSpacing={'5px'}
          textTransform={'uppercase'}
          fontSize={'40px'}
          color={'#1A1A1A'}
          maxLines={3}
        >
          {data.post.title}
        </Text>
        <Post_Content>{parse(data.post.content)}</Post_Content>
      </Post_Container>
    );
  }

  return <div />;
};

const Post_Container = styled.div`
  padding-top: 24px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export default Post;
