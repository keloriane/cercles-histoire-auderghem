import NavBar from '../components/NavBar';
import styled from 'styled-components';

export function Layout({ children }) {
  return (
    <>
      <NavBar />
      <Content_Wrapper>{children}</Content_Wrapper>
      <Footer />
    </>
  );
}
import Footer from '../components/Footer';

const Content_Wrapper = styled.div`
  padding-top: 60px;
`;

export default Layout;
