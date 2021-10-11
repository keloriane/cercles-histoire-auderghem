import styled from 'styled-components';
import Header from '../components/common/Header';
import Home_Header from '../components/Home_Header';
import About_Header from '../components/About_Header';
import About_Text_Section from '../components/About_Text_Section';

const About = () => {
  return (
    <About_Container>
      <About_Header />
      <About_Text_Section />
    </About_Container>
  );
};
const About_Container = styled.div``;
export default About;
