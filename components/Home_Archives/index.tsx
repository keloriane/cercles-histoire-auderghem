import * as S from './home_archive.styles';
import { Home_Archive_Item } from 'components/Home_Archive_Item';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'graphql-hooks';
import { HOME_ARCHIVES_QUERY } from 'query/home_archives.query';
import parse from 'html-react-parser';
import Home_Sections_Title from '../Home_Sections_Title';
import { links } from '../../app.config';
import { useRouter } from 'next/router';
import { goTo } from '../../Utils/helper';

const Home_Archives: React.FC = () => {
  const router = useRouter();
  const { data } = useQuery(HOME_ARCHIVES_QUERY);
  const [archive, setArchive] = useState([]);
  useEffect(() => {
    if (data) {
      setArchive(data.archiveNeighbours.nodes);
    }
  }, [archive, data]);

  return (
    <>
      <Home_Sections_Title>Les Archives</Home_Sections_Title>
      <S.Home_archive_style>
        {archive.map((item) => (
          <Home_Archive_Item
            key={item.archive_details.titre}
            text={parse(item.archive_details.description)}
            image={item.archive_details.preview.sourceUrl}
            title={item.archive_details.titre}
            link={() => goTo(`${links.neighbours}/${item.id}`)}
          />
        ))}
      </S.Home_archive_style>
    </>
  );
};

export default Home_Archives;
