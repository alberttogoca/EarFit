import { Container, Row } from 'react-bootstrap';

export const Footer = (): JSX.Element => {
  return (
    <Container>
      <Row className="justify-content-center p-3">
        <p className="lead text-muted text-align-center">This web was created using Nextjs and TypeScript</p>
      </Row>
    </Container>
  );
};
