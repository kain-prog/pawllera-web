import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faTwitter,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import style from './PreHeader.module.scss';

export const PreHeader = () => {
  return (
    <>
      <div className={style.pHeader}>
        <div className={style.container}>
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
              href="https://www.tiktok.com/@pawllera7"
              target="_blank"
              className={style.tiktok}
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faTiktok} />
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
              href="https://www.facebook.com/paullo.gabriel.9/"
              target="_blank"
              className={style.facebook}
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>

          <div className={style.contact}>
            <a
              href="mailto:email@provedor.com.br"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              <span>email@teste.com.br</span>
            </a>
            <a
              href="https://wa.me/+5521998471362"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
              <span>(21)99847-1362</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
