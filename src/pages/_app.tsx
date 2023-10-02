import '@/styles/globals.scss';
import '@/styles/fonts.scss';
import { Loader } from '@/components/Loader';

import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2500);
  }, []);

  return <>{loading ? <Loader /> : <Component {...pageProps} />}</>;
}
