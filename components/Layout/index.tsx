import { Header } from 'components/Header';
import Head from 'next/head';
import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

export default function Layout({ children }: IProps): JSX.Element {
  return (
    <>
      <Head>
        <title>EarFit</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta
          name="description"
          content="EARFIT: Aplicación para entrenamiento auditivo musical basada en Next.js y Typescript"
        ></meta>
      </Head>
      <Header></Header>
      {children}
    </>
  );
}
