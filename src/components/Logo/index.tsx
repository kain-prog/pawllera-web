import Link from 'next/link';
import logo from '../../../public/logo-pawllera.png';
import Image from 'next/image';

import style from './Logo.module.scss';

type LogoProps = {
  clProps: string;
};

export const Logo = ({ clProps }: LogoProps) => {
  return (
    <>
      <div className={`${style.logo} ${clProps}`}>
        <Link href={'/'}>
          <Image src={logo} alt="logo-pawllera" />
        </Link>
      </div>
    </>
  );
};
