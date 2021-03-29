import 'bootswatch/dist/pulse/bootstrap.min.css';
import 'styles/global.css';

import Layout from 'components/Layout';
import { InstrumentProvider } from 'context/InstrumentContext';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Layout>
      <InstrumentProvider>
        <Component {...pageProps} />
      </InstrumentProvider>
    </Layout>
  );
}
