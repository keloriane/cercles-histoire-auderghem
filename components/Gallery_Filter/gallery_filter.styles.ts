import styled, { css } from 'styled-components';
import { fontFamily } from '../../styles/theme';

interface IGallery_Filter_Styles {
  show: boolean;
}

export const Gallery_Filter = styled.div<IGallery_Filter_Styles>`
  position: fixed;
  padding-left: 16px;
  padding-top: 16px;
  padding-right: 32px;
  box-shadow: 3px 4px 12px rgba(0, 0, 0, 0.25);
  height: 100%;
  z-index: 10;
  background: white;
  button {
    width: 120px;
    background: none;
    border: 1px solid #a62e44;
    color: #a62e44;
    font-size: 17px;
    text-transform: uppercase;
    padding: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    &:hover {
      background-color: #a62e44;
      color: white;
      transition: 0.2s ease-in-out;
    }
  }
  ${({ show }) =>
    !show &&
    css`
      display: none;
    `}
`;

export const Gallery_Filter_Item = styled.div`
  margin-bottom: 12px;
  display: flex;
  align-items: center;
`;
export const Gallery_Filter_Item_Checkbox = styled.input`
  all: unset;
  display: inline-block;
  width: 15px;
  height: 15px;
  border: 1px solid #000000;
  background: white;
  box-sizing: border-box;
  &:checked {
    background: #a62e44;
  }

  &:checked + label {
    color: #a62e44;
  }
`;
export const Gallery_Filter_Item_Label = styled.label`
  font-family: ${fontFamily.main};
  margin-left: 8px;
  margin-top: 5px;
  text-transform: capitalize;
`;
