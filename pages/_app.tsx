import { AppProps } from 'next/app'
import 'bootswatch/dist/pulse/bootstrap.min.css'
import '../styles/global.css'
import React from 'react'
import Layout from '../components/Layout/Layout'

export default function App({ Component, pageProps }: AppProps) {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }