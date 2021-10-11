import styled, { css } from 'styled-components';
import { respondMax, respondMin } from 'styles/mixins';
import Link from 'next/link';

export const Header = styled.div`
  ${respondMax(
    'sm',
    css`
      padding: 32px;
    `
  )}
  ${respondMin(
    'sm',
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 140px 0 100px;
    `
  )}
`;

export const Header_Wrapper = styled.div`
  display: flex;
  ${respondMax(
    'md',
    css`
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `
  )}

  ${respondMin(
    'md',
    css`
      display: flex;
      gap: 64px;
      justify-content: space-between;
      align-items: center;
    `
  )}
`;

export const Header_LeftWrapper = styled.div`
  ${respondMax(
    'sm',
    css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `
  )}
  ${respondMin(
    'md',
    css`
      max-width: 400px;
      padding-left: 24px;
    `
  )}
`;

export const Header_RightWrapper = styled.div``;

export const Header_Title = styled.h2`
  display: grid;
  grid-template-columns: 40px 1fr;
  max-width: 600px;
  grid-column-gap: 20px;
  align-items: center;
  align-self: flex-start;
  ${respondMin(
    'lg',
    css`
      margin-left: -60px;
    `
  )}
`;

export const Header_Title_Link = styled(Link)`
  all: unset;
`;

export const Header_Title_Link_Image = styled.img`
  margin-top: -6px;
`;

export const Header_Text = styled.div`
  margin: 24px 0px 24px;
  ${respondMin(
    'sm',
    css`
      margin-top: 40px;
    `
  )}
`;
