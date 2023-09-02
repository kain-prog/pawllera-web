import Link from 'next/link';
import { useRouter } from 'next/router';
import style from './Nav.module.scss';

interface styleProps {
  styleNav: string;
}

export const Nav = (props: styleProps) => {
  const router = useRouter();

  return (
    <>
      <div className={`${props.styleNav} ${style.nav}`}>
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
    </>
  );
};
