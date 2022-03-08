import 'bootswatch/dist/pulse/bootstrap.min.css';
import 'styles/global.css';

import Layout from 'components/Layout';
import { EarfitContext } from 'context/EarfitContext';
import { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>EarFit</title>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="194x194" href="/icons/apple-icon-precomposed.png" />
        <link rel="apple-touch-icon" sizes="194x194" href="/icons/apple-icon.png" />
        <meta name="theme-color" content="#f9f8fc" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="EARFIT: Musical Ear Training. These exercises will improve your musical ability by developing a more intuitive understanding of what you hear."
        />
        <meta name="author" content="Alberto Gómez Cano" />
        <meta name="keywords" content="Musical Ear Trainning, Music, TFG, Notes, Intervals, Scales" />
      </Head>
      <EarfitContext>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </EarfitContext>
    </>
  );
}
