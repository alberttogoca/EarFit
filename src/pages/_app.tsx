import 'bootswatch/dist/pulse/bootstrap.min.css';
import 'styles/global.css';

import { SoundfontContext } from 'context/SoundfontContext';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <SoundfontContext>
      <Component {...pageProps} />
    </SoundfontContext>
  );
}
