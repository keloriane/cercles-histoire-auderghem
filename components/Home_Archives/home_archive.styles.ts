import styled, { css } from 'styled-components';
import { respondMax, respondMin } from 'styles/mixins';

export const Home_archive_style = styled.section`
  width: 100%;
  max-width: 1280px;
  margin: 60px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 30px;
  position: relative;
  z-index: 2;
`;
