import 'bootswatch/dist/pulse/bootstrap.min.css';
import 'styles/global.css';

import Layout from 'components/Layout';
import { SoundfontContext } from 'context/SoundfontContext';
import { AppProps } from 'next/app';
//import { InstrumentProvider } from 'context/InstrumentContext';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Layout>
      <SoundfontContext>
        <Component {...pageProps} />
      </SoundfontContext>
    </Layout>
  );
}
