import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import style from './SocialMedia.module.scss';

type SocialMediaProps = {
  clProps: string;
};

export const SocialMedia = ({ clProps }: SocialMediaProps) => {
  return (
    <>
      <div className={`${style.socialMedia} ${clProps}`}>
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
    </>
  );
};
