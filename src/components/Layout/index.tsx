import { Menu } from 'components/Menu';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import { ReactNode } from 'react';
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
  const isAbout = pathname === '/about';

  return (
    <>
      <html lang="en"></html>
      <Head>
        <title>EarFit</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta
          name="description"
          content="EARFIT: Musical Ear Training. These exercises will improve your musical ability by developing a more intuitive understanding of what you hear."
        ></meta>
      </Head>
      <Header />
      <Container fluid className="bg-light shadow-lg">
        <Row className="p-3">
          <Col className="col-sm border d-none d-lg-block">{isHome || isAbout ? null : <Menu />}</Col>
          <Col className="col-lg-6 border p-3 shadow-lg">{children}</Col>
          <Col className={`col-sm border ${isHome || isAbout ? 'd-none d-lg-block' : ''}`}>{rightColumn}</Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
