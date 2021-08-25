//import { Note, Scale } from '@tonaljs/tonal';
import { Options, PlayButton, Streak, Title } from 'components/Exercise';
import Layout from 'components/Layout';
import { Menu } from 'components/Menu';
import { Piano } from 'components/Piano';
import { useInstrumentContext } from 'context/SoundfontContext';
import useNotes, { Note } from 'hooks/useNotes';
import React, { useState } from 'react';
import Selectable from 'utils/Selectable';

import { NotesConfiguration } from '../../components/Exercise/NotesConfiguration';

export default function Notes(): JSX.Element {
  const { instrument } = useInstrumentContext();
  const { notes, answer, setNewAnswer, updateIsSelectedNote } = useNotes();
  const [streak, setStreak] = useState(0);

  function playAnswer(answer: Note): void {
    instrument?.play(answer.value, 0, { duration: 2 });
    console.log(`Now playing: ${answer.value}`);
  }

  function handleOption(selectedOption: Note): boolean {
    if (selectedOption.value.toUpperCase() === answer.value.toUpperCase()) {
      const newAnswer = setNewAnswer();
      setStreak((s) => s + 1);
      playAnswer(newAnswer);
      return true;
    } else {
      setStreak(0);
      return false;
    }
  }
  function handleOptionIsSelectedChange(option: Selectable, newValue: boolean): void {
    updateIsSelectedNote(option.displayName, newValue);
  }

  return (
    <>
      <Layout
        rightColumn={<NotesConfiguration options={notes} onOptionIsSelectedChange={handleOptionIsSelectedChange} />}
      >
        <Title>Notes</Title>
        <PlayButton instrument={instrument} handlePlay={() => playAnswer(answer)} title={'Note?'} />
        <Options options={notes.filter((n) => n.isSelected)} handleOptionClick={handleOption} streak={streak} />
        <Streak streak={streak} />
        <Piano />
      </Layout>
    </>
  );
}
