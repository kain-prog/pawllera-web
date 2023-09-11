import Link from 'next/link';
import style from './Button.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FormEvent } from 'react';
// import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

interface IButton {
  clName: string;
  redirect: string;
  content: string;
  iconFA: IconProp;
  click: (e: FormEvent) => void;
}

export const Button = (props: IButton) => {
  return (
    <div className={`${style.container} ${props.clName}`}>
      <Link
        href={props.redirect}
        className={style.btnPrimary}
        onClick={props.click}
      >
        <span className={style.btnText}>{props.content}</span>
        <span className={style.lSpinner}></span>
        <FontAwesomeIcon icon={props.iconFA} />
      </Link>
    </div>
  );
};
