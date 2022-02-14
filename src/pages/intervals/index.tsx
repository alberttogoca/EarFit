import { Exercise } from 'components/Exercise';
import PageLayout from 'components/Layout/PageLayout';
import { Menu } from 'components/Menu';
import { Options } from 'components/Options';
import { useAnswerButtons, useIntervals, usePlayButton, useStreak } from 'hooks';
import Selectable from 'utils/Selectable';

export default function Intervals(): JSX.Element {
  const { intervals, answer, setNewAnswer, updateIsSelected, changeDirection, selectAllOrThree } = useIntervals();
  const { instrument, playInterval } = usePlayButton();
  const { answerButtons, updateAnswerButtonColor, clearAnswerButtonColor } = useAnswerButtons(intervals);
  const { streak, clearStreak, IncrementStreak } = useStreak();

  function handleAnswerButtonClick(selectedOption: Selectable): boolean {
    if (selectedOption.id === answer.id) {
      setNewAnswer();
      updateAnswerButtonColor(selectedOption, true);
      IncrementStreak();
      playInterval(answer);

      setTimeout(() => {
        clearAnswerButtonColor();
      }, 1000);

      return true;
    } else {
      updateAnswerButtonColor(selectedOption, false);
      clearStreak();
      return false;
    }
  }

  return (
    <PageLayout
      leftCol={<Menu />}
      rightCol={
        <Options
          selectables={intervals}
          handleDirectionChange={() => changeDirection()}
          handleToggleButtonChange={(interval: Selectable) => updateIsSelected(interval.id, interval.isSelected)}
          handleToggleAllChange={selectAllOrThree}
        />
      }
    >
      <Exercise
        title="Intervals"
        playButtonLabel="Interval?"
        instrument={instrument}
        handlePlayButtonClick={() => playInterval(answer)}
        selectables={answerButtons}
        handleAnswerButtonClick={handleAnswerButtonClick}
        streak={streak}
      />
    </PageLayout>
  );
}
