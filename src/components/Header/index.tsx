import Link from 'next/link';
import logo from '../../../public/logo-pawllera.png';
import Image from 'next/image';
import style from './Header.module.scss';
import { useRouter } from 'next/router';

export const Header = () => {
  const router = useRouter();

  return (
    <>
      <header className={style.header}>
        <div className={style.container}>
          <div className={style.logo}>
            <Link href={'/'}>
              <Image src={logo} alt="logo-pawllera" />
            </Link>
          </div>
          <div className={style.nav}>
            <nav>
              <ul>
                <li>
                  <Link href="/about">
                    <p
                      className={
                        router.pathname === '/about' ? `${style.active}` : ''
                      }
                    >
                      Sobre
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/projects">
                    <p
                      className={
                        router.pathname === '/projects' ? `${style.active}` : ''
                      }
                    >
                      Meus Projetos
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <p
                      className={
                        router.pathname === '/contact' ? `${style.active}` : ''
                      }
                    >
                      Contato
                    </p>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};
