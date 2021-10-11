import { colors } from 'styles/theme';
import React from 'react';
import * as S from './button.styles';
import Text from '../Text';
import Link from 'next/link';

interface Ibutton {
  link: string;
  variants?: object | any;
}
const Button: React.FC<Ibutton> = ({ children, link, variants }) => {
  return (
    <S.Button variants={variants}>
      <a href={link}>
        <Text color={colors.red} textTransform={'uppercase'}>
          {children}
        </Text>
      </a>
    </S.Button>
  );
};

export default Button;
