import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../Button';
import { FormEvent, useState } from 'react';
import style from './Form.module.scss';

export const Form = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [visibility, setVisibility] = useState<boolean>(false);
  const [msg, setMsg] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [btnDisabled, setBtnDisabled] = useState<string>('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setBtnDisabled(style.btnDisabled);

    const data = {
      name,
      email,
      subject,
      message,
    };

    const options = {
      method: 'POST',
      body: JSON.stringify(data),
    };

    const send = await fetch(`http://localhost:3000/api/contact`, options).then(
      (res) =>
        res.json().then((result) => {
          if (res.status === 200) {
            setBtnDisabled('');
            setVisibility(true);
            setType(style.messageSuccess);
            setMsg(result.message);
            setTimeout(() => {
              setVisibility(false);
            }, 3000);
          } else {
            setBtnDisabled('');
            setVisibility(true);
            setType(style.messageError);
            setMsg(result.message);
            setTimeout(() => {
              setVisibility(false);
            }, 3000);
          }
        }),
    );

    setBtnDisabled('');

    return send;
  };

  return (
    <>
      <div className={style.containerForm}>
        <div className={style.formField}>
          <label htmlFor="#name">Nome: </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={style.formField}>
          <label htmlFor="#email">E-mail: </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={style.formField}>
          <label htmlFor="#subject">Assunto: </label>
          <input
            type="text"
            name="subject"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className={style.formField}>
          <label htmlFor="#message">Mensagem: </label>
          <textarea
            name="message"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className={style.formField}>
          <Button
            clName={`${style.fs18} ${btnDisabled}`}
            redirect={'#'}
            content={'Enviar'}
            iconFA={faPaperPlane}
            click={handleSubmit}
          />
        </div>
        <div className={`${style.formField}`}>
          <div className={`${style.alert} ${visibility ? type : ''}`}>
            <p>{visibility ? msg : ''}</p>
          </div>
        </div>
      </div>
    </>
  );
};
