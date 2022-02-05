import { Menu } from 'components/Menu';
import { useRouter } from 'next/dist/client/router';
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
