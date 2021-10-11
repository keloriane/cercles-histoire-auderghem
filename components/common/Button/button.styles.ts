import * as T from 'styles/theme';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export interface ButtonStyleInterface {
  variants?: object;
}

export const Button = styled(motion.button)`
  all: unset;
  border: 1px solid ${T.colors.red};
  padding: 10px 40px;
  max-width: 150px;
  color: white;
`;
