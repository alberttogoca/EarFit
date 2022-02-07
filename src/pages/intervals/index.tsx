import { AnswerButtons, Piano, PlayButton, Streak, Title } from 'components/Exercise';
import Layout from 'components/Layout';
import { IntervalsOptions } from 'components/Options';
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
        <IntervalsOptions
          intervals={intervals}
          handleDirectionChange={() => changeDirection()}
          handleToggleButtonChange={(interval: Selectable) => updateIsSelected(interval.id, interval.isSelected)}
          handleToggleAllChange={selectAllOrThree}
        />
      }
    >
      <Title>Intervals</Title>
      <PlayButton title={'Interval?'} instrument={instrument} handlePlayButtonClick={() => playInterval(answer)} />
      <AnswerButtons answerButtons={answerButtons} handleAnswerButtonClick={handleAnswerButtonClick} />
      <Streak streak={streak} />
      <Piano />
    </Layout>
  );
}
