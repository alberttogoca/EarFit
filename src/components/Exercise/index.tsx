import { Container } from 'react-bootstrap';
import { Instrument } from 'services/instrumentService';
import AnswerButton from 'utils/AnswerButton';

import { AnswerButtons } from './AnswerButtons';
import { Piano } from './Piano';
import { PlayButton } from './PlayButton';
import { Streak } from './Streak';
import { Title } from './Title';

interface Props {
  exerciseTitle: string;
  playTitle: string;
  instrument: Instrument;
  handlePlayButtonClick: () => void;
  answerButtons: AnswerButton[];
  handleAnswerButtonClick: (answerButton: AnswerButton) => boolean;
  streak: number;
}

export const Exercise = ({
  exerciseTitle,
  playTitle,
  instrument,
  handlePlayButtonClick,
  answerButtons,
  handleAnswerButtonClick,
  streak,
}: Props): JSX.Element => {
  return (
    <Container>
      <Title>{exerciseTitle}</Title>
      <PlayButton title={playTitle} instrument={instrument} handlePlayButtonClick={handlePlayButtonClick} />
      <AnswerButtons answerButtons={answerButtons} handleAnswerButtonClick={handleAnswerButtonClick} />
      <Streak streak={streak} />
      <Piano />
    </Container>
  );
};
