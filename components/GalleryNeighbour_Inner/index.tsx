import { useFilterNeighbour } from '../../hooks/useFilterPost';
import { useEffect, useState } from 'react';
import Header from '../common/Header';
import parse from 'html-react-parser';
import GalleryGrid from '../common/Galery';

const GalleryNeighbour__Inner = () => {
  const { neighbours } = useFilterNeighbour();
  const [gallery, setGallery] = useState(null);
  useEffect(() => {
    if (neighbours) {
      const parameter = window.location.pathname.split('/')[2];
      neighbours.map((neighbour) => {
        if (neighbour.id === parameter) {
          setGallery(neighbour);
        }
      });
    }
  });

  return (
    <>
      <Header
        title={gallery && gallery.quartier.nomQuartier}
        source={gallery && gallery.quartier.galleriePhotos[1].sourceUrl}
        excerpt={gallery && parse(gallery.quartier.archives)}
      />
      {gallery && <GalleryGrid images={gallery.quartier.galleriePhotos} />}
    </>
  );
};
export default GalleryNeighbour__Inner;
