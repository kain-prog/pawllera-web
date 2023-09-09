import {
  faFacebook,
  faInstagram,
  faTiktok,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './Contact.module.scss';
import contactImage from '../../../public/communication.png';
import Image from 'next/image';

export const ContactMe = () => {
  return (
    <>
      <div className={style.containerContactMe}>
        <div className={style.intro}>
          <Image src={contactImage} alt={'Imagem de contato'} />
        </div>

        <div className={style.socialMedia}>
          <a
            href="https://www.instagram.com/pawllera"
            target="_blank"
            className={style.instagram}
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.facebook.com/paullo.gabriel.9/"
            target="_blank"
            className={style.facebook}
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://twitter.com/pawllera"
            target="_blank"
            className={style.twitter}
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>

          <a
            href="https://www.tiktok.com/@pawllera7"
            target="_blank"
            className={style.tiktok}
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTiktok} />
          </a>
        </div>
      </div>
    </>
  );
};
