import { useInstrumentContext } from 'context/EarfitContext';
import { Button, Container } from 'react-bootstrap';
import Selectable from 'utils/Selectable';

interface Props {
  title: string;
  noteToPlay?: Selectable;
  scaleToPlay?: Selectable;
  intervalToPlay?: Selectable;
}

export const PlayButton = ({ title, noteToPlay, scaleToPlay, intervalToPlay }: Props): JSX.Element => {
  const { selectedInstrument, play } = useInstrumentContext();

  const handlePlayButton = (): void => {
    if (noteToPlay) {
      play(noteToPlay, 0.3, 0, 2);
    }
    if (scaleToPlay) {
      play(scaleToPlay, 0.3, 0, 0.5);
    }
    if (intervalToPlay) {
      play(intervalToPlay, 0.8, 0, 0.7);
    }
  };

  return (
    <>
      <Container className="d-flex justify-content-center p-3 ">
        {selectedInstrument && (
          <Button variant="primary p-3" size="lg" aria-pressed="true" onClick={handlePlayButton}>
            {title}
          </Button>
        )}
        {!selectedInstrument && <div>Loading instrument...</div>}
      </Container>
    </>
  );
};
