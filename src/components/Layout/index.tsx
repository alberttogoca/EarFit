import { Menu } from 'components/Menu';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import React, { ReactNode } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { Footer } from './Footer';
import { Header } from './Header';

interface IProps {
  children: ReactNode;
  rightColumn?: ReactNode;
}

export default function Layout({ children, rightColumn }: IProps): JSX.Element {
  const { pathname } = useRouter();
  const isHome = pathname === '/';
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
      <Header />
      <Container fluid className="bg-light shadow-lg">
        <Row className="p-3">
          <Col className="col-sm border d-none d-lg-block">{isHome ? null : <Menu />}</Col>
          <Col className="col-lg-6 border p-3 shadow-lg">{children}</Col>
          <Col className={`col-sm border ${isHome ? 'd-none d-lg-block' : ''}`}>{rightColumn}</Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
