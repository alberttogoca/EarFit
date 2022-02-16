import { Exercise } from 'components/Exercise';
import PageLayout from 'components/Layout/PageLayout';
import { Menu } from 'components/Menu';
import { Options } from 'components/Options';
import { useAnswerButtons, useIntervals, usePlayButton, useStreak } from 'hooks';
import Selectable from 'utils/Selectable';

export default function Intervals(): JSX.Element {
  const {
    intervals,
    answer,
    setNewIntervals,
    setNewAnswer,
    updateIsSelected,
    changeDirection,
    selectAllOrThree,
  } = useIntervals();
  const { playInterval } = usePlayButton();
  const { clearAllAnswerButtonsColor, updateAnswerButtonColor } = useAnswerButtons(intervals, setNewIntervals);
  const { streak, clearStreak, IncrementStreak } = useStreak();

  function handleAnswerButtonClick(selectedOption: Selectable): void {
    if (selectedOption.id === answer.id) {
      setNewAnswer();
      updateAnswerButtonColor(selectedOption, true);
      IncrementStreak();
      playInterval(answer);

      setTimeout(() => {
        clearAllAnswerButtonsColor();
      }, 1000);
    } else {
      updateAnswerButtonColor(selectedOption, false);
      clearStreak();
    }
  }
  console.log(intervals);
  console.log(answer);

  return (
    <PageLayout
      leftCol={<Menu />}
      rightCol={
        <Options
          answerToggles={intervals}
          handleDirectionChange={changeDirection}
          handleToggleButtonChange={updateIsSelected}
          handleToggleAllChange={selectAllOrThree}
        />
      }
    >
      <Exercise
        title="Intervals"
        playButtonLabel="Interval?"
        handlePlayButtonClick={() => playInterval(answer)}
        answerButtons={intervals}
        handleAnswerButtonClick={handleAnswerButtonClick}
        streak={streak}
      />
    </PageLayout>
  );
}
