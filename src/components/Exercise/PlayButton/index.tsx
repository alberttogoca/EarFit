import { useInstrumentContext } from 'context/EarfitContext';
import { Button, Container } from 'react-bootstrap';

interface Props {
  label: string;
  handlePlayButtonClick: () => void;
}

export const PlayButton = ({ label, handlePlayButtonClick }: Props): JSX.Element => {
  const { instrument } = useInstrumentContext();

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
