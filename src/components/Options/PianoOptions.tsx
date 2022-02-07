import { InstrumentSelector, OptionsTitle } from 'components/Options/ConfigSections';
import { Container } from 'react-bootstrap';

export const PianoOptions = (): JSX.Element => {
  return (
    <Container>
      <OptionsTitle>Options</OptionsTitle>
      <InstrumentSelector />
    </Container>
  );
};
