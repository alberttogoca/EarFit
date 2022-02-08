import { Button, Container } from 'react-bootstrap';
import { Instrument } from 'services/instrumentService';

interface Props {
  label: string;
  instrument: Instrument;
  handlePlayButtonClick: () => void;
}

export const PlayButton = ({ label, instrument, handlePlayButtonClick }: Props): JSX.Element => {
  return (
    <>
      <Container className="d-flex justify-content-center p-3 ">
        {instrument && (
          <Button variant="primary p-3" size="lg" aria-pressed="true" onClick={handlePlayButtonClick}>
            {label}
          </Button>
        )}
        {!instrument && <div>Loading instrument...</div>}
      </Container>
    </>
  );
};
