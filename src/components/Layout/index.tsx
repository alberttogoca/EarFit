import { useRouter } from 'next/dist/client/router';
import { Col, Container, Row } from 'react-bootstrap';

import { Footer } from './Footer';
import { Header } from './Header';

interface Props {
  children: JSX.Element;
  leftCol?: JSX.Element;
  rightCol?: JSX.Element;
}

export default function Layout({ children, rightCol, leftCol }: Props): JSX.Element {
  const { pathname } = useRouter();
  const isHome = pathname === '/';
  const isAbout = pathname === '/about';

  return (
    <>
      <Header />
      <Container fluid className="bg-light shadow-lg">
        <Row className="p-3">
          <Col className="col-sm border d-none d-lg-block">{isHome || isAbout ? null : leftCol}</Col>
          <Col className="col-lg-6 border p-3 shadow-lg">{children}</Col>
          <Col className={`col-sm border ${isHome || isAbout ? 'd-none d-lg-block' : ''}`}>{rightCol}</Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
