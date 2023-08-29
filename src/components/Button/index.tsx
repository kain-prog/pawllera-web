import Link from 'next/link';
import style from './Button.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

interface IButton {
  clName: string;
  redirect: string;
  content: string;
}

export const Button = (props: IButton) => {
  return (
    <div className={`${style.container} ${props.clName}`}>
      <Link href={props.redirect} className={style.btnPrimary}>
        {props.content}
        <FontAwesomeIcon icon={faArrowAltCircleRight} />
      </Link>
    </div>
  );
};
