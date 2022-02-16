import { Exercise } from 'components/Exercise';
import PageLayout from 'components/Layout/PageLayout';
import { Menu } from 'components/Menu';
import { Options } from 'components/Options';
import { useAnswerButtons, useAnswerToggles, useIntervals, usePlayButton } from 'hooks';

export default function Intervals(): JSX.Element {
  const { intervals, setNewIntervals, answer, setNewAnswer, changeDirection } = useIntervals(); //Esto a contexto?
  const { playInterval } = usePlayButton();
  const { updateIsSelected, selectAllOrThree } = useAnswerToggles(intervals, setNewIntervals);
  const { answerButtons, handleAnswerButtonClick, streak } = useAnswerButtons(
    intervals,
    answer,
    setNewAnswer,
    playInterval
  );

  return (
    <PageLayout
      leftCol={<Menu />}
      rightCol={
        <Options
          answerToggles={intervals}
          handleDirectionChange={changeDirection}
          handleToggleAllChange={selectAllOrThree}
          handleToggleButtonChange={updateIsSelected}
        />
      }
    >
      <Exercise
        title="Intervals"
        playButtonLabel="Interval?"
        handlePlayButtonClick={() => playInterval(answer)}
        answerButtons={answerButtons}
        handleAnswerButtonClick={handleAnswerButtonClick}
        streak={streak}
      />
    </PageLayout>
  );
}
