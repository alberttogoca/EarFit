//import { Note, Scale } from '@tonaljs/tonal';
import { NotesConfiguration } from 'components/Configuration';
import { AnswerButtons, Piano, PlayButton, Streak, Title } from 'components/Exercise';
import { AnswerButton } from 'components/Exercise/AnswerButtons';
import Layout from 'components/Layout';
import { useInstrumentContext } from 'context/EarfitContext';
import { useNotes, useNoteScales, useOptions, useStreak } from 'hooks';
import { Scale } from 'services/noteService';
import Selectable from 'utils/Selectable';

export default function Notes(): JSX.Element {
  const { playNote } = useInstrumentContext();
  const { scales, selectedScale, setNewSelectedScale } = useNoteScales();
  const { notes, answer, setNewAnswer, updateIsSelectedNote, toggleAllNotes } = useNotes(selectedScale);
  const { options, updateOption, clearOptions } = useOptions(notes);
  const { streak, clearStreak, IncrementStreak } = useStreak();

  function handleOption(selectedOption: AnswerButton): boolean {
    if (selectedOption.displayName.toUpperCase() === answer.displayName.toUpperCase()) {
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
          selectAllOptions={toggleAllNotes}
        />
      }
    >
      <Title>Notes</Title>
      <PlayButton noteToPlay={answer} title={'Note?'} />
      <AnswerButtons options={options} handleOptionClick={handleOption} />
      <Streak streak={streak} />
      <Piano />
    </Layout>
  );
}
