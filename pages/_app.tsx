import 'bootswatch/dist/pulse/bootstrap.min.css';
import 'styles/global.css';

import Layout from 'components/Layout';
import { InstrumentToPianoContext } from 'context/InstrumentToPianoContext';
import { SoundfontContext } from 'context/SoundfontContext';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Layout>
      <SoundfontContext>
        <InstrumentToPianoContext>
          <Component {...pageProps} />
        </InstrumentToPianoContext>
      </SoundfontContext>
    </Layout>
  );
}
