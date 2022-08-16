import Logo from 'components/Layout/Header/Logo';
import MenuButton from 'components/Layout/Header/MenuButton';
import { Col, Container, Row } from 'react-bootstrap';

export default function Header(): JSX.Element {
  return (
    <Container fluid>
      <Row className="justify-content-center p-3">
        <Col className="d-lg-none d-block">
          <MenuButton />
        </Col>
        <Col>
          <div className="d-flex justify-content-center">
            <Logo />
          </div>
        </Col>
        <Col className="d-lg-none d-block"></Col>
      </Row>
    </Container>
  );
}
