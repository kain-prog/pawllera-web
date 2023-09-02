import Link from 'next/link';
import style from './Button.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
// import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

interface IButton {
  clName: string;
  redirect: string;
  content: string;
  iconFA: IconProp;
}

export const Button = (props: IButton) => {
  return (
    <div className={`${style.container} ${props.clName}`}>
      <Link href={props.redirect} className={style.btnPrimary}>
        {props.content}
        <FontAwesomeIcon icon={props.iconFA} />
      </Link>
    </div>
  );
};
