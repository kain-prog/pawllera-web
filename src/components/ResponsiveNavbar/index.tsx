import { useState } from 'react';
import style from './Navbar.module.scss';
import { Nav } from '../Nav';
import { SocialMedia } from '../SocialMedia';
import { Logo } from '../Logo';
import { Wpp } from '../Wpp';

export const Navbar = () => {
  const [burgerClass, setBurgerClass] = useState<string>('unclicked');
  const [menuClass, setMenuClass] = useState<string>('hidden');
  const [isMenuClicked, setIsMenuClicked] = useState<boolean>(false);
  const [fixedClass, setFixedClass] = useState<string>('fixed');

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass(style.clicked);
      setMenuClass(style.visible);
      setFixedClass(style.fixed);
    } else {
      setBurgerClass(style.unclicked);
      setMenuClass(style.hidden);
      setFixedClass('');
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <>
      <div className={style.containerSideBar}>
        <div
          className={`${style.burgerMenu} ${fixedClass}`}
          onClick={updateMenu}
        >
          <div className={`${burgerClass} ${style.burgerBar}`}></div>
          <div className={`${burgerClass} ${style.burgerBar}`}></div>
          <div className={`${burgerClass} ${style.burgerBar}`}></div>
        </div>

        <div className={`${style.sideBar} ${menuClass}`}>
          <Logo clProps={style.logo} />
          <Nav styleNav={style.menuNav} />
          <SocialMedia clProps={style.social} />
          <h3>Ou entre em contato pelo whatsapp</h3>
          <Wpp clProps={style.wpp} />
        </div>
      </div>
    </>
  );
};
