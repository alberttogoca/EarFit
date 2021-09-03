//import { Note, Scale } from '@tonaljs/tonal';
import { Options, PlayButton, Streak, Title } from 'components/Exercise';
import { IOption } from 'components/Exercise/Options';
import Layout from 'components/Layout';
import { Piano } from 'components/Piano';
import { useInstrumentContext } from 'context/EarfitContext';
import useNotes from 'hooks/useNotes';
import useNoteScales from 'hooks/useNoteScales';
import useOptions from 'hooks/useOptions';
import useStreak from 'hooks/useStreak';
import { Scale } from 'services/noteService';
import Selectable from 'utils/Selectable';

import { NotesConfiguration } from '../../components/Exercise/NotesConfiguration';

export default function Notes(): JSX.Element {
  const { playNote } = useInstrumentContext();
  const { scales, selectedScale, setNewSelectedScale } = useNoteScales();
  const { notes, answer, setNewAnswer, updateIsSelectedNote } = useNotes(selectedScale);
  const { options, updateOption, clearOptions } = useOptions(notes);
  const { streak, clearStreak, IncrementStreak } = useStreak();

  function handleOption(selectedOption: IOption): boolean {
    if (selectedOption.value.toUpperCase() === answer.value.toUpperCase()) {
      setNewAnswer();
      updateOption(selectedOption, true);
      IncrementStreak();
      playNote(answer);

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

  function handleNoteIsSelectedChange(option: Selectable): void {
    updateIsSelectedNote(option.displayName, option.isSelected);
  }

  function handleSelectedScaleChange(scale: Scale): void {
    setNewSelectedScale(scale.name);
  }

  return (
    <Layout
      rightColumn={
        <NotesConfiguration
          notes={notes}
          scales={scales}
          selectedScale={selectedScale}
          onNoteIsSelectedChange={handleNoteIsSelectedChange}
          onSelectedScaleChange={handleSelectedScaleChange}
        />
      }
    >
      <Title>Notes</Title>
      <PlayButton noteToPlay={answer} title={'Note?'} />
      <Options options={options} handleOptionClick={handleOption} />
      <Streak streak={streak} />
      <Piano />
    </Layout>
  );
}
