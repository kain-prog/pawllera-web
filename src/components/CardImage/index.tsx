import style from './CardImage.module.scss';
import pawllera from '../../../public/profile-pawllera.jpeg';
import psdIcon from '../../../public/psd-icon.png';
import Image from 'next/image';
import { Button } from '../Button';
import { faImages } from '@fortawesome/free-solid-svg-icons';

export const CardImage = () => {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <Image src={pawllera} alt="Pawllera" />
      </div>
      <div className={style.desc}>
        <h1>Me chamo Paulo Gabriel</h1>
        <h2> - 25 anos, moro em São Gonçalo - Rio de Janeiro.</h2>
        <p>
          Comecei a fazer artes pois desde criança costumava sempre admirar
          fotos &quot;bem tiradas&quot;, complexas e mais trabalhadas, assim
          como montagens e tratamentos de imagens. Resolvi me aprofundar e ir em
          busca de conhecimento para aprender um pouco mais, e acabou que virou
          meu hobbie preferido criar imagens para jogadores de futebol e
          músicos.
        </p>
        <p>
          Desde pequeno sou apaixonado por futebol, usufruo da filosofia de ser
          &quot;buscar ser o melhor&quot; em tudo que eu faço, levando comigo e
          tendo como inspiração um ícone futebolístico. Torcedor do Fluminense -
          RJ. Disciplina e persuasão são as palavras que me definem.
        </p>

        <Image
          src={psdIcon}
          alt={'Ícone Photoshop'}
          className={style.services}
        />

        <Button
          redirect="/projects"
          clName={style.btnAbout}
          content="Meus Projetos"
          iconFA={faImages}
        />
      </div>
    </div>
  );
};
