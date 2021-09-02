//import { Note, Scale } from '@tonaljs/tonal';
import { Options, PlayButton, Streak, Title } from 'components/Exercise';
import { IOption } from 'components/Exercise/Options';
import Layout from 'components/Layout';
import { Piano } from 'components/Piano';
import { useInstrumentContext } from 'context/EarfitContext';
import useNotes, { SelectableNote } from 'hooks/useNotes';
import useStreak from 'hooks/useStreak';
import { useEffect, useState } from 'react';
import { Note, Scale } from 'services/noteService';
import Selectable from 'utils/Selectable';

import { NotesConfiguration } from '../../components/Exercise/NotesConfiguration';

export default function Notes(): JSX.Element {
  const { selectedInstrument } = useInstrumentContext();
  const { notes, answer, setNewAnswer, updateIsSelectedNote, scales, selectedScale, setNewSelectedScale } = useNotes();
  const { streak, clearStreak, IncrementStreak } = useStreak();

  const [noteOptions, setNoteOptions] = useState<IOption[]>([]);

  function playAnswer(answer: Note): void {
    if (answer) {
      selectedInstrument?.notePlayer?.play(answer.value, 0, { duration: 2 });
      console.log(`Now playing: ${answer.value}`);
    }
  }

  useEffect(() => {
    const newNotes = notes
      .filter((n) => n.isSelected)
      .map<IOption>((note) => {
        return {
          displayName: note.displayName,
          value: note.value,
          color: 'secondary',
        };
      });

    setNoteOptions(newNotes);
  }, [notes]);

  function handleOption(selectedOption: IOption): boolean {
    if (selectedOption.value.toUpperCase() === answer.value.toUpperCase()) {
      const newAnswer = setNewAnswer();
      updateNoteOption(selectedOption, true);
      IncrementStreak();

      setTimeout(() => {
        playAnswer(newAnswer);
        clearNoteOption();
      }, 500);

      return true;
    } else {
      updateNoteOption(selectedOption, false);
      clearStreak();
      return false;
    }
  }

  function updateNoteOption(clickedOption: IOption, isAnswer: boolean): void {
    setNoteOptions((options) => {
      return options.map((option) => {
        if (clickedOption.displayName === option.displayName) {
          return {
            ...option,
            color: isAnswer ? 'success' : 'danger',
          };
        }
        return { ...option };
      });
    });
  }

  function clearNoteOption(): void {
    setNoteOptions((options) => {
      return options.map((option) => {
        return {
          ...option,
          color: 'secondary',
        };
      });
    });
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
      <Options options={noteOptions} handleOptionClick={handleOption} />
      <Streak streak={streak} />
      <Piano />
    </Layout>
  );
}
