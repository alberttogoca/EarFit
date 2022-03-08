import { useRouter } from 'next/dist/client/router';
import { ReactNode } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

interface Props {
  children: ReactNode;
  leftCol?: ReactNode;
  rightCol?: ReactNode;
}

export default function PageLayout({ children, rightCol, leftCol }: Props): JSX.Element {
  const { pathname } = useRouter();
  const isHome = pathname === '/';
  const isAbout = pathname === '/about';

  return (
    <>
      <Container fluid className="bg-light shadow-lg">
        <Row className="p-3">
          <Col className="col-sm border d-none d-lg-block">{isHome || isAbout ? null : leftCol}</Col>
          <Col className="col-lg-6 border p-3 shadow-lg">{children}</Col>
          <Col className={`col-sm border ${isHome || isAbout ? 'd-none d-lg-block' : ''}`}>{rightCol}</Col>
        </Row>
      </Container>
    </>
  );
}
