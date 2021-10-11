import { useRouter } from 'next/router';
import { NEIGHBOUR_GALLERY_QUERY } from 'query/neighbour_gallery.query';
import { useManualQuery } from 'graphql-hooks';
import { useEffect, useState } from 'react';
import Header from '../../../components/common/Header';
import GalleryGrid from '../../../components/common/Galery';
import { NEIGHBOUR_ARCHIVE_QUERY } from '../../../query/neighbour_archive.query';
import GalleryNeighbour_Archive from '../../../components/GalleryNeighbour_Archive';

const GalleryNeighbour = (props) => {
  const router = useRouter();
  const { id, page } = router.query;
  const [query, setQuery] = useState(null);
  const [fetchGallery] = useManualQuery(NEIGHBOUR_GALLERY_QUERY, {
    variables: {
      id: id,
    },
  });
  const [fetchArchive] = useManualQuery(NEIGHBOUR_ARCHIVE_QUERY, {
    variables: {
      id: id,
    },
  });

  const fetchData = () => {
    if (page === 'archive') {
      fetchArchive().then((response) => {
        console.log(response.data);
        setQuery(response.data);
      });
    } else if (page === 'galerie') {
      fetchGallery().then((response) => {
        setQuery(response.data);
      });
    }
  };

  useEffect(() => {
    if (id) fetchData();
  }, [id]);

  const renderContent = () => {
    if (page === 'archive')
      return (
        <GalleryNeighbour_Archive content={query.neighbour.quartier.archives} />
      );
    else if (page === 'galerie')
      return <GalleryGrid images={query.neighbour.quartier.galleriePhotos} />;
  };

  if (query) {
    return (
      <>
        <Header
          title={query.neighbour.quartier.nomQuartier}
          excerpt={query.neighbour.quartier.description}
          source={query.neighbour.quartier.imagePrincipale.sourceUrl}
        />
        {renderContent()}
      </>
    );
  }

  return <></>;
};
export default GalleryNeighbour;
