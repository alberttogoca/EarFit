import 'bootswatch/dist/pulse/bootstrap.min.css';

import Layout from 'components/Layout';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
