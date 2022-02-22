import { useInstrumentContext } from 'context/EarfitContext';
import { Button, Container } from 'react-bootstrap';

interface Props {
  label: string;
  handlePlayButtonClick: () => void;
}

export const PlayButton = ({ label, handlePlayButtonClick }: Props): JSX.Element => {
  const { instrument } = useInstrumentContext();
  const isLoading = !instrument;

  return (
    <>
      <Container className="d-flex justify-content-center p-3 ">
        <Button
          variant="primary p-3"
          size="lg"
          aria-pressed="true"
          onClick={handlePlayButtonClick}
          disabled={isLoading}
        >
          {label}
        </Button>
      </Container>
    </>
  );
};
