import React from 'react';
import * as S from './navBar.styles';

const NavBar = () => {
  const GalleryNav = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Gallery',
      link: '/galeries',
    },
    {
      name: 'Archives',
      link: '/chroniques',
    },
    {
      name: 'Les quartiers',
      link: '/neighbours',
    },
    {
      name: 'Publication',
      link: '/articles',
    },
  ];

  return (
    <S.NavBar>
      <S.NavBar_Logo_Container>
        <h1>
          <a href={'/'}>
            Cercle d{"'"}histoire d{"'"}Auderghem
          </a>
        </h1>
      </S.NavBar_Logo_Container>
      <S.NavBar_Menu_Container_List>
        {GalleryNav.map((link) => (
          <S.NavBar_Menu_Container_List_Item key={link.name}>
            <S.NavBar_Menu_Container_List_Item_Link href={link.link}>
              {link.name}
            </S.NavBar_Menu_Container_List_Item_Link>
          </S.NavBar_Menu_Container_List_Item>
        ))}
      </S.NavBar_Menu_Container_List>
    </S.NavBar>
  );
};
export default NavBar;
