import style from './CardImage.module.scss';
import pawllera from '../../../public/profile-pawllera.jpeg';
import Image from 'next/image';
import { Button } from '../Button';

export const CardImage = () => {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <Image src={pawllera} alt="Pawllera" />
      </div>
      <div className={style.desc}>
        <h1>Meu nome é Paullo e eu sou ....</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          sequi vero iure quidem iusto accusamus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
          aliquam nihil nemo saepe, molestiae perferendis est laudantium
          recusandae eveniet qui?
        </p>
        <p>Lorem ipsum dolor sit amet.</p>

        <Button
          redirect="/projects"
          clName={style.btnAbout}
          content="Meus Projetos"
        />
      </div>
    </div>
  );
};
