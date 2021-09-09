import { InstrumentSelector } from 'components/Configuration';
import { Container, Row } from 'react-bootstrap';

export const PianoConfiguration = (): JSX.Element => {
  return (
    <Container>
      <Row className="justify-content-center p-3">
        <h1>Options</h1>
      </Row>
      <InstrumentSelector />
    </Container>
  );
};
