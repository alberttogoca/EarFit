import { AppProps } from 'next/app'
import 'bootswatch/dist/pulse/bootstrap.min.css'
import '../styles/global.css'

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
  }