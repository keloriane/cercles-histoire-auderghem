import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Background_Wrapper = styled(motion.div)`
  position: absolute;
  height: 100%;
  width: 100vw;
  display: flex;
  justify-content: stretch;
  z-index: 0;
`;

export const Line = styled.div`
  width: 100%;
  height: 104%;
  border: 0.1px solid #e6ebf1;
`;
