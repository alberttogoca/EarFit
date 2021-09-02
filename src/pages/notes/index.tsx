//import { Note, Scale } from '@tonaljs/tonal';
import { Options, PlayButton, Streak, Title } from 'components/Exercise';
import Layout from 'components/Layout';
import { Piano } from 'components/Piano';
import { useInstrumentContext } from 'context/EarfitContext';
import useNotes, { SelectableNote } from 'hooks/useNotes';
import useStreak from 'hooks/useStreak';
import { Note, Scale } from 'services/noteService';
import Selectable from 'utils/Selectable';

import { NotesConfiguration } from '../../components/Exercise/NotesConfiguration';

export default function Notes(): JSX.Element {
  const { selectedInstrument } = useInstrumentContext();
  const { notes, answer, setNewAnswer, updateIsSelectedNote, scales, selectedScale, setNewSelectedScale } = useNotes();
  const { streak, clearStreak, IncrementStreak } = useStreak();

  function playAnswer(answer: Note): void {
    if (answer) {
      selectedInstrument?.notePlayer?.play(answer.value, 0, { duration: 2 });
      console.log(`Now playing: ${answer.value}`);
    }
  }

  function handleOption(selectedOption: SelectableNote): boolean {
    if (selectedOption.value.toUpperCase() === answer.value.toUpperCase()) {
      const newAnswer = setNewAnswer();
      IncrementStreak();
      playAnswer(newAnswer);
      return true;
    } else {
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
      <PlayButton handlePlay={() => playAnswer(answer)} title={'Note?'} />
      <Options options={notes.filter((n) => n.isSelected)} handleOptionClick={handleOption} streak={streak} />
      <Streak streak={streak} />
      <Piano />
    </Layout>
  );
}
