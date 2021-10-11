import parse from 'html-react-parser';
import * as S from './galleryNeighbour_archive.styles';

const GalleryNeighbour_Archive = ({ content }) => {
  return (
    <S.GalleryNeighbour_Archive>{parse(content)}</S.GalleryNeighbour_Archive>
  );
};
export default GalleryNeighbour_Archive;
