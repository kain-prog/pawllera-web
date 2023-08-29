import { TypeAnimation } from 'react-type-animation';
import style from './Typing-welcome.module.scss';

export const TypeWelcome = () => {
  return (
    <>
      <div className={style.container}>
        <TypeAnimation
          sequence={['Seja muito BEM VINDO!', 1000]}
          wrapper="span"
          speed={20}
          style={{ fontSize: '4em', display: 'inline-block' }}
          repeat={Infinity}
          className={style.typeWelcome}
        />
      </div>
    </>
  );
};
