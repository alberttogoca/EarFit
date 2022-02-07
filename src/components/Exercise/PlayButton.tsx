import { Button, Container } from 'react-bootstrap';
import { Instrument } from 'services/instrumentService';

interface Props {
  title: string;
  instrument: Instrument;
  handlePlayButtonClick: () => void;
}

export const PlayButton = ({ title, instrument, handlePlayButtonClick }: Props): JSX.Element => {
  return (
    <>
      <Container className="d-flex justify-content-center p-3 ">
        {instrument && (
          <Button variant="primary p-3" size="lg" aria-pressed="true" onClick={handlePlayButtonClick}>
            {title}
          </Button>
        )}
        {!instrument && <div>Loading instrument...</div>}
      </Container>
    </>
  );
};
