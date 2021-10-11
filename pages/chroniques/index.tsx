import { Home_Archive_Item } from '../../components/Home_Archive_Item';
import Home_Archives from '../../components/Home_Archives';
import parse from 'html-react-parser';
import { links } from '../../app.config';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'graphql-hooks';
import { ARCHIVES_FETCH_MORE_QUERY } from '../../query/neighbours_archives.query';
import { produce } from 'immer';
import GalleryGrid from '../../components/common/Galery';
import Header from '../../components/common/Header';
import styled, { css } from 'styled-components';
import { respondMax } from '../../styles/mixins';

const Archives = () => {
  const [cursor, setCursor] = useState('');
  const [loadMore, setLoadMore] = useState(false);
  const { data: fetchMoreMediaItemsQuery } = useQuery(
    ARCHIVES_FETCH_MORE_QUERY,
    {
      variables: {
        cursor,
        first: 9,
      },
      updateData,
    }
  );

  console.log(fetchMoreMediaItemsQuery);

  function updateData(prevPage, NextPage) {
    if (loadMore) {
      return produce(NextPage, (draftNextPage) => {
        draftNextPage.archiveNeighbours.edges = [
          ...prevPage.archiveNeighbours.edges,
          ...draftNextPage.archiveNeighbours.edges,
        ];
      });
    }
    return NextPage;
  }

  function fetchMoreMedia() {
    setLoadMore(true);
    if (fetchMoreMediaItemsQuery.archiveNeighbours.pageInfo.hasNextPage) {
      setCursor(fetchMoreMediaItemsQuery.archiveNeighbours.pageInfo.endCursor);
    }
  }

  return (
    <>
      <Header
        title={"les archives de la commune d'Auderghem"}
        excerpt={
          "Découvrez toutes les archives de notre belle commune d'Auderghem"
        }
        source={'/loading_rouge_cloitre.png'}
      />
      <Archive_Wrapper>
        {fetchMoreMediaItemsQuery &&
          fetchMoreMediaItemsQuery.archiveNeighbours.edges.map((item) => (
            <Home_Archive_Item
              key={item.node.archive_details.titre}
              text={parse(item.node.archive_details.contenu)}
              image={item.node.archive_details.preview.sourceUrl}
              title={item.node.archive_details.titre}
              href={`${links.neighbours}/${item.node.id}?page=archive`}
            />
          ))}
      </Archive_Wrapper>
      {fetchMoreMediaItemsQuery && (
        <GalleryGrid
          images={fetchMoreMediaItemsQuery.archiveNeighbours.nodes}
          fetchMore={fetchMoreMedia}
        />
      )}
    </>
  );
};
const Archive_Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  ${respondMax(
    'sm',
    css`
      width: 100%;
      max-width: 380px;
      height: auto;
      padding: 20px;
    `
  )}
`;

export default Archives;
