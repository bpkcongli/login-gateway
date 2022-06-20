import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}

export default MyApp;
