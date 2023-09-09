import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../Button';
import style from './Form.module.scss';

export const Form = () => {
  return (
    <>
      <div className={style.containerForm}>
        <div className={style.formField}>
          <label htmlFor="#name">Nome: </label>
          <input type="text" name="" id="name" />
        </div>
        <div className={style.formField}>
          <label htmlFor="#email">E-mail: </label>
          <input type="email" name="" id="email" />
        </div>
        <div className={style.formField}>
          <label htmlFor="#subject">Assunto: </label>
          <input type="text" name="" id="email" />
        </div>
        <div className={style.formField}>
          <label htmlFor="#message">Mensagem: </label>
          <textarea name="" id="message"></textarea>
        </div>
        <div className={style.formField}>
          <Button
            clName={style.fs18}
            redirect={'#'}
            content={'Enviar'}
            iconFA={faPaperPlane}
          />
        </div>
      </div>
    </>
  );
};
