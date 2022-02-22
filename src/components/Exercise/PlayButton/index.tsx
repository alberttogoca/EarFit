import { Button, Container } from 'react-bootstrap';

interface Props {
  label: string;
  handlePlayButtonClick: () => void;
}

export const PlayButton = ({ label, handlePlayButtonClick }: Props): JSX.Element => {
  return (
    <>
      <Container className="d-flex justify-content-center p-3 ">
        <Button variant="primary p-3" size="lg" aria-pressed="true" onClick={handlePlayButtonClick}>
          {label}
        </Button>
      </Container>
    </>
  );
};
