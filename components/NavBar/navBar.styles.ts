import styled, { css } from 'styled-components';
import { respondMax } from '../../styles/mixins';

export const NavBar = styled.nav`
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #2f2f2f;
  position: fixed;
  background-color: #fff;
  z-index: 50;
  h1 {
    font-style: normal;
    font-weight: 300;
    font-size: 19px;
    line-height: 31px;
    ${respondMax(
      'md',
      css`
        font-size: 19px;
      `
    )}
  }
  ${respondMax(
    'sm',
    css`
      display: none;
    `
  )}
`;
export const NavBar_Logo_Container = styled.div`
  display: block;
`;
export const NavBar_Menu_Container = styled.ul``;
export const NavBar_Menu_Container_List = styled.div`
  display: flex;
  list-style: none;
  justify-content: space-evenly;
  width: 100%;
  max-width: 650px;
`;

export const NavBar_Menu_Container_List_Item = styled.li`
  display: block;
`;
export const NavBar_Menu_Container_List_Item_Link = styled.a`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 22px;
  text-transform: uppercase;
  color: #000000;
  &:hover {
    color: #a62e44;
  }
  ${respondMax(
    'md',
    css`
      font-size: 16px;
    `
  )}
`;
