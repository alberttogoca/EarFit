import 'bootswatch/dist/pulse/bootstrap.min.css';
import 'styles/global.css';

import { EarfitContext } from 'context/EarfitContext';
import { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>EarFit</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="EARFIT: Musical Ear Training. These exercises will improve your musical ability by developing a more intuitive understanding of what you hear."
        />
        <meta name="author" content="Alberto Gómez Cano" />
        <meta name="keywords" content="Musical Ear Trainning, Music, TFG, Notes, Intervals, Scales" />
      </Head>
      <EarfitContext>
        <Component {...pageProps} />
      </EarfitContext>
    </>
  );
}
