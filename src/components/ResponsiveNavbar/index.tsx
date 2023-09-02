import { useState } from 'react';
import style from './Navbar.module.scss';
import { Nav } from '../Nav';

export const Navbar = () => {
  const [burgerClass, setBurgerClass] = useState<string>('unclicked');
  const [menuClass, setMenuClass] = useState<string>('hidden');
  const [isMenuClicked, setIsMenuClicked] = useState<boolean>(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass(style.clicked);
      setMenuClass(style.visible);
    } else {
      setBurgerClass(style.unclicked);
      setMenuClass(style.hidden);
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <>
      <div className={style.containerSideBar}>
        <div className={style.burgerMenu} onClick={updateMenu}>
          <div className={`${burgerClass} ${style.burgerBar}`}></div>
          <div className={`${burgerClass} ${style.burgerBar}`}></div>
          <div className={`${burgerClass} ${style.burgerBar}`}></div>
        </div>

        <div className={`${style.sideBar} ${menuClass}`}>
          <Nav styleNav={style.column} />
        </div>
      </div>
    </>
  );
};
