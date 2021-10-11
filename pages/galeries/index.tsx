import styled from 'styled-components';
import { CATEGORIES_QUERY } from '../../query/categories.query';
import React, { useState } from 'react';
import { CATEGORIES_FETCH_MORE_QUERY } from '../../query/categories_filter.query';
import GalleryGrid from '../../components/common/Galery';
import { useQuery } from 'graphql-hooks';
import _ from 'lodash';
import { produce } from 'immer';
import Gallery_Filter from '../../components/Gallery_Filter';
import { useShowFilterContext } from '../../context/showFilterContext';
import Text from 'components/common/Text';
import Gallery_Content from 'components/Gallery_Content';
import * as T from 'styles/theme';

const Gallery = () => {
  const DEFAULT_LIST_CATEGORIES = ['all'];
  const { data: categoriesQuery } = useQuery(CATEGORIES_QUERY);
  const [cursor, setCursor] = useState('');
  const [loadMore, setLoadMore] = useState(false);
  const [categories, setCategories] = useState([]);
  const { show, setShow } = useShowFilterContext();

  const { data: fetchMoreMediaItemsQuery } = useQuery(
    CATEGORIES_FETCH_MORE_QUERY,
    {
      variables: {
        cursor,
        first: 10,
        list: _.isEmpty(categories) ? DEFAULT_LIST_CATEGORIES : categories,
      },
      updateData,
    }
  );

  async function handleFilterUpdate(event) {
    setLoadMore(false);
    const checkedCategorySlug = event.target.value;
    await updateCategoriesList(checkedCategorySlug);
  }

  async function updateCategoriesList(checkedCategorySlug) {
    let draftCategories;
    if (!categories.includes(checkedCategorySlug)) {
      draftCategories = [...categories, checkedCategorySlug];
      setCategories(draftCategories);
    } else {
      draftCategories = categories.filter((categorySlug) => {
        return categorySlug !== checkedCategorySlug;
      });
      setCategories(draftCategories);
    }
    return draftCategories;
  }

  function updateData(prevPage, NextPage) {
    if (loadMore) {
      return produce(NextPage, (draftNextPage) => {
        draftNextPage.mediaItems.edges = [
          ...prevPage.mediaItems.edges,
          ...draftNextPage.mediaItems.edges,
        ];
      });
    }
    return NextPage;
  }

  function fetchMoreMedia() {
    setLoadMore(true);
    if (fetchMoreMediaItemsQuery.mediaItems.pageInfo.hasNextPage) {
      setCursor(fetchMoreMediaItemsQuery.mediaItems.pageInfo.endCursor);
    }
  }

  return (
    <Gallery_Container>
      {categoriesQuery && (
        <Gallery_Filter
          categories={categoriesQuery.categories.nodes}
          handleFilterUpdate={handleFilterUpdate}
        />
      )}
      <Gallery_Content>
        <Text
          textTransform={'uppercase'}
          fontSize={'48px'}
          fontWeight={800}
          color={T.colors.red}
        >
          Photos
        </Text>
        {!show && (
          <button className={'filterButton'} onClick={() => setShow(!show)}>
            Filtres
          </button>
        )}
        {fetchMoreMediaItemsQuery && (
          <GalleryGrid
            images={fetchMoreMediaItemsQuery.mediaItems.edges}
            fetchMore={fetchMoreMedia}
          />
        )}
      </Gallery_Content>
    </Gallery_Container>
  );
};

const Gallery_Container = styled.div`
  position: relative;
`;

export default Gallery;
