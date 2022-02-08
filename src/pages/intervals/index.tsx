import { Exercise } from 'components/Exercise';
import Layout from 'components/Layout';
import { Options } from 'components/Options';
import { useAnswerButtons, useIntervals, usePlayButton, useStreak } from 'hooks';
import AnswerButton from 'utils/AnswerButton';
import Selectable from 'utils/Selectable';

export default function Intervals(): JSX.Element {
  const { intervals, answer, setNewAnswer, updateIsSelected, changeDirection, selectAllOrThree } = useIntervals();
  const { instrument, playInterval } = usePlayButton();
  const { answerButtons, updateAnswerButtonColor, clearAnswerButtonColor } = useAnswerButtons(intervals);
  const { streak, clearStreak, IncrementStreak } = useStreak();

  function handleAnswerButtonClick(selectedOption: AnswerButton): boolean {
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
    <Layout
      rightColumn={
        <Options
          selectables={intervals}
          handleDirectionChange={() => changeDirection()}
          handleToggleButtonChange={(interval: Selectable) => updateIsSelected(interval.id, interval.isSelected)}
          handleToggleAllChange={selectAllOrThree}
        />
      }
    >
      <Exercise
        exerciseTitle="Intervals"
        playTitle="Interval?"
        instrument={instrument}
        handlePlayButtonClick={() => playInterval(answer)}
        answerButtons={answerButtons}
        handleAnswerButtonClick={handleAnswerButtonClick}
        streak={streak}
      />
    </Layout>
  );
}
