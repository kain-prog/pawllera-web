import React, { ReactNode } from 'react';
import style from './Container.module.scss';

export type ContainerProps = {
  children: ReactNode;
};

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};
