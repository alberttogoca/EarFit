import { InstrumentSelector, OptionsTitle } from 'components/Configuration';
import { Container } from 'react-bootstrap';

export const PianoConfiguration = (): JSX.Element => {
  return (
    <Container>
      <OptionsTitle>Options</OptionsTitle>
      <InstrumentSelector />
    </Container>
  );
};
