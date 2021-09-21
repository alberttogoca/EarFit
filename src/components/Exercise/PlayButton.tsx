import { useInstrumentContext } from 'context/EarfitContext';
import { Button, Container } from 'react-bootstrap';
import { Interval } from 'services/intervalService';
import { Note } from 'services/noteService';
import { Scale } from 'services/scaleService';

interface Props {
  title: string;
  noteToPlay?: Note;
  scaleToPlay?: Scale;
  intervalToPlay?: Interval;
  handlePlay?: () => void;
}

export const PlayButton = ({ handlePlay, title, noteToPlay, scaleToPlay, intervalToPlay }: Props): JSX.Element => {
  const { selectedInstrument, playNote, playScale, playInterval } = useInstrumentContext();

  const handlePlayButton = (): void => {
    if (noteToPlay) {
      playNote(noteToPlay);
    }
    if (scaleToPlay) {
      playScale(scaleToPlay);
    }
    if (intervalToPlay) {
      playInterval(intervalToPlay);
    }
    if (handlePlay) handlePlay();
  };

  return (
    <>
      {/*PLAY SOUND*/}
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
