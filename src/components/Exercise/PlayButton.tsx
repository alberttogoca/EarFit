import { useInstrumentContext } from 'context/EarfitContext';
import { Button, Container } from 'react-bootstrap';
import { Note } from 'services/noteService';
import { Scale } from 'services/scaleService';

interface Props {
  title: string;
  noteToPlay?: Note;
  scaleToPlay?: Scale;
  handlePlay?: () => void;
}

export const PlayButton = ({ handlePlay, title, noteToPlay, scaleToPlay }: Props): JSX.Element => {
  const { selectedInstrument, playNote, playScale } = useInstrumentContext();

  const handlePlay2 = (): void => {
    if (noteToPlay) {
      playNote(noteToPlay);
    }
    if (scaleToPlay) {
      playScale(scaleToPlay);
    }
    if (handlePlay) handlePlay();
  };

  return (
    <>
      {/*PLAY SOUND*/}
      <Container className="d-flex justify-content-center p-3 ">
        {selectedInstrument && (
          <Button variant="primary p-3" size="lg" aria-pressed="true" onClick={handlePlay2}>
            {title}
          </Button>
        )}
        {!selectedInstrument && <div>Loading instrument...</div>}
      </Container>
    </>
  );
};
