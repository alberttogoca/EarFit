import { Head, Html, Main, NextScript } from 'next/document';

export default function Document(): JSX.Element {
  return (
    <Html lang="en">
      <Head>
        <title>EarFit</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta
          name="description"
          content="EARFIT: Musical Ear Training. These exercises will improve your musical ability by developing a more intuitive understanding of what you hear."
        ></meta>
        <meta name="author" content="Alberto Gómez Cano" />
        <meta name="keywords" content="Musical Ear Trainning, Music, TFG, Notes, Intervals, Scales" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
