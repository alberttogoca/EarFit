import { SelectableAnswerColor } from 'utils/Selectable';

import { AnswerButtons } from './AnswerButtons';
import { Piano } from './Piano';
import { PlayButton } from './PlayButton';
import { Streak } from './Streak';
import { Title } from './Title';

interface Props {
  title?: string;
  playButtonLabel?: string;
  handlePlayButtonClick?: () => void;
  answerButtons?: SelectableAnswerColor[];
  handleAnswerButtonClick?: (answerButton: SelectableAnswerColor) => void;
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
  return (
    <>
      <Title>{title}</Title>
      {title !== 'Piano' && (
        <>
          <PlayButton label={playButtonLabel} handlePlayButtonClick={handlePlayButtonClick} />
          <AnswerButtons answerButtons={answerButtons} handleAnswerButtonClick={handleAnswerButtonClick} />
          <Streak streak={streak} />
          <Piano />
        </>
      )}
      {lastNote && firstNote && (
        <>
          <Piano firstNote={firstNote} lastNote={lastNote} />
        </>
      )}
    </>
  );
};
