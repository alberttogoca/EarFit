import { useInstrumentContext } from 'context/EarfitContext';
import { Container, Spinner } from 'react-bootstrap';
import { SelectableAnswerWithColor } from 'utils/Types';

import { AnswerButtons } from './AnswerButtons';
import { Piano } from './Piano';
import { PlayButton } from './PlayButton';
import { Streak } from './Streak';
import { Title } from './Title';

interface Props {
  title: string;
  playButtonLabel?: string;
  handlePlayButtonClick?: () => void;
  answerButtons?: SelectableAnswerWithColor[];
  handleAnswerButtonClick?: (answerButton: SelectableAnswerWithColor) => void;
  streak?: number;
  firstNote?: string;
  lastNote?: string;
}

export const Exercise = ({
  title,
  playButtonLabel,
  handlePlayButtonClick,
  answerButtons,
  handleAnswerButtonClick,
  streak,
  firstNote,
  lastNote,
}: Props): JSX.Element => {
  const { instrument } = useInstrumentContext();
  const isLoading = !instrument;
  return (
    <>
      <Title>{title}</Title>
      {title !== 'Piano' ? (
        <>
          {isLoading ? (
            <Container className="d-flex justify-content-center p-5 ">
              <Spinner animation="border" role="status" variant="secondary" />
            </Container>
          ) : (
            <>
              <PlayButton label={playButtonLabel} handlePlayButtonClick={handlePlayButtonClick} />
              <AnswerButtons answerButtons={answerButtons} handleAnswerButtonClick={handleAnswerButtonClick} />
              <Streak streak={streak} />
            </>
          )}
          <Piano />
        </>
      ) : (
        <>
          <Piano firstNote={firstNote} lastNote={lastNote} />
        </>
      )}
    </>
  );
};
