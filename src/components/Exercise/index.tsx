import { Container } from 'react-bootstrap';
import { Instrument } from 'services/instrumentService';
import AnswerButton from 'utils/AnswerButton';

import { AnswerButtons } from './AnswerButtons';
import { Piano } from './Piano';
import { PlayButton } from './PlayButton';
import { Streak } from './Streak';
import { Title } from './Title';

interface Props {
  title?: string;
  playButtonLabel?: string;
  instrument?: Instrument;
  handlePlayButtonClick?: () => void;
  answerButtons?: AnswerButton[];
  handleAnswerButtonClick?: (answerButton: AnswerButton) => boolean;
  streak?: number;
  firstNote?: string;
  lastNote?: string;
}

export const Exercise = ({
  title,
  playButtonLabel,
  instrument,
  handlePlayButtonClick,
  answerButtons,
  handleAnswerButtonClick,
  streak,
  firstNote,
  lastNote,
}: Props): JSX.Element => {
  return (
    <>
      {title !== 'Piano' && (
        <Container>
          <Title>{title}</Title>
          <PlayButton label={playButtonLabel} instrument={instrument} handlePlayButtonClick={handlePlayButtonClick} />
          <AnswerButtons answerButtons={answerButtons} handleAnswerButtonClick={handleAnswerButtonClick} />
          <Streak streak={streak} />
          <Piano />
        </Container>
      )}
      {lastNote && firstNote && (
        <Container>
          <Title>{title}</Title>
          <Piano firstNote={firstNote} lastNote={lastNote} />
        </Container>
      )}
    </>
  );
};
