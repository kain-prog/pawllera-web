import Link from 'next/link';
import logo from '../../../public/logo-pawllera.png';
import Image from 'next/image';
import style from './Header.module.scss';
import { Nav } from '../Nav';
import { Navbar } from '../ResponsiveNavbar';

export const Header = () => {
  return (
    <>
      <header className={style.header}>
        <div className={style.container}>
          <div className={style.logo}>
            <Link href={'/'}>
              <Image src={logo} alt="logo-pawllera" />
            </Link>
          </div>
          <Nav styleNav={`${style.navigation}`} />
          <Navbar />
        </div>
      </header>
    </>
  );
};
