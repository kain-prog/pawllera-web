import style from './Footer.module.scss';

export const Footer = () => {
  return (
    <div className={style.footer}>
      <p>&copy; - Todos os Direitos Reservados | 2023 - </p>
      <a href="https://digitallabor.com.br"> Kain Dev </a>
    </div>
  );
};
