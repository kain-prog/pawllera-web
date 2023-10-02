import Image from 'next/image';
import logo from '../../../public/logo-pawllera.png';
import style from './Loader.module.scss';

export const Loader = () => {
  return (
    <div className={style.loader}>
      <div className={style.containerLoader}>
        <Image src={logo} alt="logo-pawllera loader"></Image>
      </div>
    </div>
  );
};
