import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import style from './PreHeader.module.scss';
import { SocialMedia } from '../SocialMedia';
import { Wpp } from '../Wpp';

export const PreHeader = () => {
  return (
    <>
      <div className={style.pHeader}>
        <div className={style.container}>
          <SocialMedia clProps="" />

          <div className={style.contact}>
            <a
              href="mailto:email@provedor.com.br"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              <span>email@teste.com.br</span>
            </a>
            <Wpp clProps={''} />
          </div>
        </div>
      </div>
    </>
  );
};
