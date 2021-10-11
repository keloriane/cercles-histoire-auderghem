import styled from 'styled-components';
import Header from 'components/common/Header';
import React, { useEffect } from 'react';
import Chronicles_UtilsBar from '../../components/Chronicles_UtilsBar';
import { useRouter } from 'next/router';
import { useManualQuery, useQuery } from 'graphql-hooks';
import { SINGLE_QUERY } from '../../query/single_archive.query';
import parse from 'html-react-parser';
import Chronicles_Details from '../../components/Chronicles_Details';

const Chronicles = ({ excerpt, source }) => {
  const router = useRouter();
  const { id, page } = router.query;
  const [fetchQuery, { data }] = useManualQuery(SINGLE_QUERY, {
    variables: {
      id: id,
    },
  });

  useEffect(() => {
    if (id) {
      fetchQuery();
    }
  }, [id]);

  if (data) {
    console.log(data.archiveNeighbour.archive_details);
    return (
      <Chronicles_Container>
        <Header
          title={data.archiveNeighbour.archive_details.titre}
          excerpt={parse(data.archiveNeighbour.archive_details.description)}
          source={source}
        />
        <Chronicles_UtilsBar />
        <Chronicles_Details
          titleArchive={data.archiveNeighbour.archive_details.titre}
          textArchive={parse(data.archiveNeighbour.archive_details.contenu)}
        />
      </Chronicles_Container>
    );
  }
  return <></>;
};

const Chronicles_Container = styled.div``;

Chronicles.defaultProps = {
  title: 'Chronicles all your documents in a clean and consistent way ',
  excerpt:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, ad animi architecto aspernatur atque aut eaque fugit harum inventore iusto laborum non obcaecati officiis optio placeat quod recusandae reiciendis vero?',
  source: '/header.jpg',
};
export default Chronicles;
