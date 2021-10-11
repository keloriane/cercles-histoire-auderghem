import * as S from './neighbour_header_filter_input.styles';

const Neighbour_Header_Filter_Input = (props) => {
  return (
    <S.Input_Wrapper>
      <label htmlFor="">{props.neighbourName}</label>
      <S.Input_Radio
        type={'radio'}
        value={props.neighbourName}
        name={'neighbourFilter'}
        onChange={props.filter}
        checked={props.checked}
      />
    </S.Input_Wrapper>
  );
};

export default Neighbour_Header_Filter_Input;
