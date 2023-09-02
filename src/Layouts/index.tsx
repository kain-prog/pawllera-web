import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { PreHeader } from '@/components/PreHeader';
import React, { ReactNode } from 'react';
import style from './Layouts.module.scss';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <header>
        <PreHeader />
        <Header />
      </header>

      <main className={style.content}> {children} </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};
