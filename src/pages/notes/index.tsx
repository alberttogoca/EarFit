//import { Note, Scale } from '@tonaljs/tonal';
import { Configuration, Options, PlayButton, Streak, Title } from 'components/Exercise';
import ExerciseLayout from 'components/Layout/ExerciseLayout';
import { Menu } from 'components/Menu';
import { Piano } from 'components/Piano';
import { useInstrumentContext } from 'context/SoundfontContext';
import useNotes from 'hooks/useNotes';
import { Answer } from 'hooks/useNotes';
import React, { useState } from 'react';

export default function Notes(): JSX.Element {
  const { instrument } = useInstrumentContext();
  const { options, answer, setNewAnswer } = useNotes();
  const [streak, setStreak] = useState(0);

  function playAnswer(answer: Answer): void {
    instrument?.play(answer.value, 0, { duration: 2 });
    console.log(`Now playing: ${answer.name}`);
  }

  function handlePlay(): void {
    playAnswer(answer);
  }

  function handleOption(selectedOption: string): boolean {
    if (selectedOption.toUpperCase() === answer.name.toUpperCase()) {
      const newAnswer = setNewAnswer();
      setStreak((s) => s + 1);
      playAnswer(newAnswer);
      return true;
    } else {
      setStreak(0);
      return false;
    }
  }

  return (
    <>
      <ExerciseLayout col1={<Menu />} col3={<Configuration page={'Notes'} options={options} />}>
        <Title>Notes</Title>
        <PlayButton instrument={instrument} handlePlay={handlePlay} title={'Note?'} />
        <Options options={options} handleOptionClick={handleOption} streak={streak} />
        <Streak streak={streak} />
        <Piano />
      </ExerciseLayout>
    </>
  );
}
