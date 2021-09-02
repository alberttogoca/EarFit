import { useInstrumentContext } from 'context/EarfitContext';
import { Button, Container } from 'react-bootstrap';

interface Props {
  title: string;
  handlePlay: () => void;
}

export const PlayButton = ({ handlePlay, title }: Props): JSX.Element => {
  const { selectedInstrument } = useInstrumentContext();
  return (
    <>
      {/*PLAY SOUND*/}
      <Container className="d-flex justify-content-center p-3 ">
        {selectedInstrument && (
          <Button variant="primary p-3" size="lg" aria-pressed="true" onClick={handlePlay}>
            {title}
          </Button>
        )}
        {!selectedInstrument && <div>Loading instrument...</div>}
      </Container>
    </>
  );
};
