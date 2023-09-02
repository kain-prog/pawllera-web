import style from './Container.module.scss';
import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  styleProps: object;
};

export const Container = ({ children, styleProps }: ContainerProps) => {
  return (
    <>
      <div className={style.container} style={styleProps}>
        {children}
      </div>
    </>
  );
};
