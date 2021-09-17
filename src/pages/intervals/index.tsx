//import { Note, Scale } from '@tonaljs/tonal';
import { IntervalsConfiguration } from 'components/Configuration';
import { Options, Piano, PlayButton, Streak, Title } from 'components/Exercise';
import { IOption } from 'components/Exercise/Options';
import Layout from 'components/Layout';
import { useInstrumentContext } from 'context/EarfitContext';
import { useIntervals, useOptions, useStreak } from 'hooks';
import Selectable from 'utils/Selectable';

export default function Intervals(): JSX.Element {
  const { playInterval } = useInstrumentContext();
  const { intervals, answer, setNewAnswer, updateIsSelectedInterval, changeIntervalsDirection } = useIntervals();
  const { options, updateOption, clearOptions } = useOptions(intervals);
  const { streak, clearStreak, IncrementStreak } = useStreak();

  function handleOption(selectedOption: IOption): boolean {
    if (selectedOption.displayName === answer.name) {
      setNewAnswer();
      updateOption(selectedOption, true);
      IncrementStreak();
      playInterval(answer);

      setTimeout(() => {
        clearOptions();
      }, 1000);

      return true;
    } else {
      updateOption(selectedOption, false);
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
        <IntervalsConfiguration
          intervals={intervals}
          onIntervalIsSelectedChange={handleScaleIsSelectedChange}
          onDirectionChange={handleDirectionChange}
        />
      }
    >
      <Title>Intervals</Title>
      <PlayButton intervalToPlay={answer} title={'Interval?'} />
      <Options options={options} handleOptionClick={handleOption} />
      <Streak streak={streak} />
      <Piano />
    </Layout>
  );
}
