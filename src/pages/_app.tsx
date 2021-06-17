import 'bootswatch/dist/pulse/bootstrap.min.css'; //tenia la 4.5 y he actualizado a 5.0 -> me ha quitado los instrumentos de abajo y agrandado la letra
//import 'bootstrap/dist/css/bootstrap.css' //con bootstrap normal sigue sin ir el desplegable
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
