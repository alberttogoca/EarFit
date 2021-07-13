import { NotePlayer } from 'context/soundfont-wrapper';
import { ReactNode } from 'react';
import { Button, Container } from 'react-bootstrap';

interface Props {
  title: string;
  instrument: NotePlayer;
  handlePlay: () => void;
  children?: ReactNode;
}

export const PlayButton = ({ instrument, handlePlay, title }: Props): JSX.Element => {
  return (
    <>
      {/*PLAY SOUND*/}
      <Container className="d-flex justify-content-center p-3 ">
        {instrument && (
          <Button variant="primary p-3" size="lg" aria-pressed="true" onClick={handlePlay}>
            {title}
          </Button>
        )}
        {!instrument && <div>Loading instrument...</div>}
      </Container>
    </>
  );
};
