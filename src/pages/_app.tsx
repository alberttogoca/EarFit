import 'bootswatch/dist/pulse/bootstrap.min.css';
import 'styles/global.css';

import { EarfitContext } from 'context/EarfitContext';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <EarfitContext>
      <Component {...pageProps} />
    </EarfitContext>
  );
}
