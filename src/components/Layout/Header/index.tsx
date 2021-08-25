import Link from 'next/link';
import { Container, Row } from 'react-bootstrap';

export const Header = (): JSX.Element => {
  return (
    <Container fluid>
      <Row className="justify-content-center p-3">
        <h1>
          <Link href="/">
            <a className="link-unstyled">EARFIT</a>
          </Link>
        </h1>
      </Row>
    </Container>
  );
};
