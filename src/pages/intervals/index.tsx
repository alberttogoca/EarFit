import { Exercise } from 'components/Exercise';
import PageLayout from 'components/Layout/PageLayout';
import { Menu } from 'components/Menu';
import { Options } from 'components/Options';
import { useAnswer, useAnswerButtons, useAnswerToggles, useIntervals, usePlayButton } from 'hooks';

export default function Intervals(): JSX.Element {
  const { intervals } = useIntervals();
  const { playInterval, reverse, changeDirection } = usePlayButton();
  const { answerToggles, updateIsSelected, selectAllOrThree } = useAnswerToggles(intervals);
  const { answer, setNewAnswer } = useAnswer(answerToggles, 'interval');
  const { answerButtons, handleAnswerButtonClick, streak } = useAnswerButtons(
    answerToggles,
    answer,
    setNewAnswer,
    playInterval
  );

  return (
    <PageLayout
      leftCol={<Menu />}
      rightCol={
        <Options
          reverse={reverse}
          handleDirectionChange={changeDirection}
          answerToggles={answerToggles}
          handleAnswerToggleAllChange={selectAllOrThree}
          handleAnswerTogglesChange={updateIsSelected}
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
