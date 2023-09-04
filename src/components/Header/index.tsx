import style from './Header.module.scss';
import { Nav } from '../Nav';
import { Navbar } from '../ResponsiveNavbar';
import { Logo } from '../Logo';

export const Header = () => {
  return (
    <>
      <header className={style.header}>
        <div className={style.container}>
          <Logo clProps="" />
          <Nav styleNav={`${style.navigation}`} />
          <Navbar />
        </div>
      </header>
    </>
  );
};
