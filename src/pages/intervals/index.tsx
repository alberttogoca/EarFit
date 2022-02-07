//import { Note, Scale } from '@tonaljs/tonal';
import { AnswerButtons, Piano, PlayButton, Streak, Title } from 'components/Exercise';
import Layout from 'components/Layout';
import { IntervalsOptions } from 'components/Options';
import { useInstrumentContext } from 'context/EarfitContext';
import { useAnswerButtons, useIntervals, useStreak } from 'hooks';
import AnswerButton from 'utils/AnswerButton';
import Selectable from 'utils/Selectable';

export default function Intervals(): JSX.Element {
  const { playInterval } = useInstrumentContext();
  const {
    intervals,
    answer,
    setNewAnswer,
    updateIsSelectedInterval,
    changeIntervalsDirection,
    toggleAllIntervals,
  } = useIntervals();
  const { answerButtons, updateAnswerButton, clearAnswerButton } = useAnswerButtons(intervals);
  const { streak, clearStreak, IncrementStreak } = useStreak();

  function handleOption(selectedOption: AnswerButton): boolean {
    if (selectedOption.displayName === answer.displayName) {
      setNewAnswer();
      updateAnswerButton(selectedOption, true);
      IncrementStreak();
      playInterval(answer);

      setTimeout(() => {
        clearAnswerButton();
      }, 1000);

      return true;
    } else {
      updateAnswerButton(selectedOption, false);
      clearStreak();
      return false;
    }
  }

  function handleScaleIsSelectedChange(option: Selectable): void {
    updateIsSelectedInterval(option.displayName, option.isSelected);
  }

  function handleDirectionChange(): void {
    changeIntervalsDirection();
  }

  return (
    <Layout
      rightColumn={
        <IntervalsOptions
          intervals={intervals}
          onIntervalIsSelectedChange={handleScaleIsSelectedChange}
          onDirectionChange={handleDirectionChange}
          selectAllOptions={toggleAllIntervals}
        />
      }
    >
      <Title>Intervals</Title>
      <PlayButton intervalToPlay={answer} title={'Interval?'} />
      <AnswerButtons answerButtons={answerButtons} handleOptionClick={handleOption} />
      <Streak streak={streak} />
      <Piano />
    </Layout>
  );
}
