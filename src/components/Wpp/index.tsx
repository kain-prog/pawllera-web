import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type wppProps = {
  clProps: string;
};

export const Wpp = ({ clProps }: wppProps) => {
  return (
    <>
      <a
        href="https://wa.me/+5521998471362"
        target="_blank"
        rel="noreferrer"
        className={clProps}
      >
        <FontAwesomeIcon icon={faWhatsapp} />
        <span>(21)99847-1362</span>
      </a>
    </>
  );
};
