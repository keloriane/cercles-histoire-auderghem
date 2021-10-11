import Home_Header from 'components/Home_Header';
import styled from 'styled-components';
import Home_Posts from 'components/Home_Posts';
import { useEffect, useState } from 'react';
import Home_Archives from '../components/Home_Archives';
import Home_Gallery from '../components/Home_Galery';
import Home_Tags from '../components/Home_Tag/Home_Tag';
import Background from '../components/common/Background';

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    loading
      ? document.querySelector('body').classList.add('loading')
      : document.querySelector('body').classList.remove('loading');
  }, [loading]);

  return (
    // <AnimateSharedLayout type={'crossfade'}>
    //   <AnimatePresence>
    //     {loading ? (
    //       <motion.div key={'loader'}>
    //         <Loader setLoading={setLoading} layoutId={'main-image-1'} />
    //       </motion.div>
    //     ) : (
    <Home_Container>
      <Home_Header layoutId={'main-image-1'} />
      <Home_Posts />
      <Home_Gallery />
      <Home_Tags />
      <Home_Archives />
    </Home_Container>
    //     )}
    //   </AnimatePresence>
    // </AnimateSharedLayout>
  );
}

const Home_Container = styled.div`
  position: relative;
`;
