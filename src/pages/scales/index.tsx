//import { Note, Scale } from '@tonaljs/tonal';
import { ScalesConfiguration } from 'components/Configuration';
import { Options, Piano, PlayButton, Streak, Title } from 'components/Exercise';
import { IOption } from 'components/Exercise/Options';
import Layout from 'components/Layout';
import { useInstrumentContext } from 'context/EarfitContext';
import { useOptions, useScales, useStreak } from 'hooks';
import Selectable from 'utils/Selectable';

export default function Scales(): JSX.Element {
  const { playScale } = useInstrumentContext();
  const { scales, answer, setNewAnswer, updateIsSelectedScale } = useScales();
  const { options, updateOption, clearOptions } = useOptions(scales);
  const { streak, clearStreak, IncrementStreak } = useStreak();

  function handleOption(selectedOption: IOption): boolean {
    if (selectedOption.displayName.toUpperCase() === answer.name.toUpperCase()) {
      setNewAnswer();
      updateOption(selectedOption, true);
      IncrementStreak();
      playScale(answer);

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
    updateIsSelectedScale(option.displayName, option.isSelected);
  }

  return (
    <Layout rightColumn={<ScalesConfiguration scales={scales} onScaleIsSelectedChange={handleScaleIsSelectedChange} />}>
      <Title>Scales</Title>
      <PlayButton scaleToPlay={answer} title={'Scale?'} />
      <Options options={options} handleOptionClick={handleOption} />
      <Streak streak={streak} />
      <Piano />
    </Layout>
  );
}
