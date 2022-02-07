//import { Note, Scale } from '@tonaljs/tonal';
import { AnswerButtons, Piano, PlayButton, Streak, Title } from 'components/Exercise';
import Layout from 'components/Layout';
import { ScalesOptions } from 'components/Options';
import { useInstrumentContext } from 'context/EarfitContext';
import { useAnswerButtons, useScales, useStreak } from 'hooks';
import AnswerButton from 'utils/AnswerButton';
import Selectable from 'utils/Selectable';

export default function Scales(): JSX.Element {
  const { play } = useInstrumentContext();
  const { scales, answer, setNewAnswer, updateIsSelectedScale, changeScalesDirection, toggleAllScales } = useScales();
  const { answerButtons, updateAnswerButton, clearAnswerButton } = useAnswerButtons(scales);
  const { streak, clearStreak, IncrementStreak } = useStreak();

  function handleOption(selectedOption: AnswerButton): boolean {
    if (selectedOption.displayName.toUpperCase() === answer.displayName.toUpperCase()) {
      setNewAnswer();
      updateAnswerButton(selectedOption, true);
      IncrementStreak();
      play(answer);

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
    updateIsSelectedScale(option.displayName, option.isSelected);
  }

  function handleDirectionChange(): void {
    changeScalesDirection();
  }

  return (
    <Layout
      rightColumn={
        <ScalesOptions
          scales={scales}
          onScaleIsSelectedChange={handleScaleIsSelectedChange}
          onDirectionChange={handleDirectionChange}
          toggleAllScales={toggleAllScales}
        />
      }
    >
      <Title>Scales</Title>
      <PlayButton scaleToPlay={answer} title={'Scale?'} />
      <AnswerButtons answerButtons={answerButtons} handleOptionClick={handleOption} />
      <Streak streak={streak} />
      <Piano />
    </Layout>
  );
}
