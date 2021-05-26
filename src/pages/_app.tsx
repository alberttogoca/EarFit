import 'bootswatch/dist/pulse/bootstrap.min.css';
import 'styles/global.css';

import Layout from 'components/Layout';
import { SoundfontContext } from 'context/SoundfontContext';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Layout>
      <SoundfontContext>
        <Component {...pageProps} />
      </SoundfontContext>
    </Layout>
  );
}
