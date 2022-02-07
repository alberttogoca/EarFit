//import { Note, Scale } from '@tonaljs/tonal';
import { AnswerButtons, Piano, PlayButton, Streak, Title } from 'components/Exercise';
import Layout from 'components/Layout';
import { NotesOptions } from 'components/Options';
import { useInstrumentContext } from 'context/EarfitContext';
import { useAnswerButtons, useNotes, useStreak } from 'hooks';
import AnswerButton from 'utils/AnswerButton';
import Selectable from 'utils/Selectable';

export default function Notes(): JSX.Element {
  const { playNote } = useInstrumentContext();
  const {
    notes,
    answer,
    scalesNames,
    selectedScale,
    setNewAnswer,
    updateIsSelectedNote,
    toggleAllNotes,
    setNewSelectedScale,
  } = useNotes();
  const { answerButtons, updateAnswerButton, clearAnswerButton } = useAnswerButtons(notes);
  const { streak, clearStreak, IncrementStreak } = useStreak();

  function handleOption(selectedOption: AnswerButton): boolean {
    if (selectedOption.displayName.toUpperCase() === answer.displayName.toUpperCase()) {
      setNewAnswer();
      updateAnswerButton(selectedOption, true);
      IncrementStreak();
      playNote(answer);

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

  function handleNoteIsSelectedChange(option: Selectable): void {
    updateIsSelectedNote(option.displayName, option.isSelected);
  }

  function handleSelectedScaleChange(scale: string): void {
    setNewSelectedScale(scale);
  }

  return (
    <Layout
      rightColumn={
        <NotesOptions
          notes={notes}
          scalesNames={scalesNames}
          selectedScale={selectedScale}
          onNoteIsSelectedChange={handleNoteIsSelectedChange}
          onSelectedScaleChange={handleSelectedScaleChange}
          selectAllOptions={toggleAllNotes}
        />
      }
    >
      <Title>Notes</Title>
      <PlayButton noteToPlay={answer} title={'Note?'} />
      <AnswerButtons answerButtons={answerButtons} handleOptionClick={handleOption} />
      <Streak streak={streak} />
      <Piano />
    </Layout>
  );
}
