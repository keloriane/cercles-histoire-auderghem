import * as S from './background.styles';

const Background = () => {
  const animation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        ease: [0.33, 0.4, 0.02, 0.99],
        delay: 1.6,
        duration: 1.4,
      },
    },
  };
  return (
    <S.Background_Wrapper variants={animation} initial="hidden" animate="show">
      <S.Line></S.Line>
      <S.Line></S.Line>
      <S.Line></S.Line>
      <S.Line></S.Line>
    </S.Background_Wrapper>
  );
};
export default Background;
