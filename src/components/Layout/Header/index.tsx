import { MenuButton } from 'components/Layout/Header/MenuButton';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';

export const Header = (): JSX.Element => {
  return (
    <Container fluid>
      <Row className="justify-content-center p-3">
        <Col className="d-lg-none d-block">
          <MenuButton />
        </Col>
        <Col>
          <div className="d-flex justify-content-center">
            <h1>
              <Link href="/">
                <a className="link-unstyled">EARFIT</a>
              </Link>
            </h1>
          </div>
        </Col>
        <Col className="d-lg-none d-block"></Col>
      </Row>
    </Container>
  );
};
