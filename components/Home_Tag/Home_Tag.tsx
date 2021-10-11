import * as S from './home_tag.styles';

const Home_Tag = (props) => {
  return <S.Tag_Link href="#">#{props.tagName}</S.Tag_Link>;
};
export default Home_Tag;
