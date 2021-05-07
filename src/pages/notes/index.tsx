//import { Note, Scale } from '@tonaljs/tonal';
import { Configuration, Options, PlayButton, Title } from 'components/Exercise';
import ExerciseLayout from 'components/Layout/ExerciseLayout';
import { Menu } from 'components/Menu';
import { Piano } from 'components/Piano';
import { useInstrumentContext } from 'context/SoundfontContext';
import useNotes from 'hooks/useNotes';
import React, { useState } from 'react';

export interface Answer {
  name: string;
  value: string;
}

export default function Notes(): JSX.Element {
  const { instrument } = useInstrumentContext();
  const { options, answer, setNewAnswer } = useNotes();

  //red buttons:
  const [enable, setEnable] = useState<boolean>(true);
  const optionClassName = enable ? 'btn btn-secondary' : 'btn btn-danger';

  function playAnswer(answer: Answer): void {
    //instrument?.stop(); //Replace this
    instrument?.play(answer.value, 0, { duration: 2 });
    console.log(`Now playing: ${answer.name}`);
  }

  function handlePlay(): void {
    playAnswer(answer);
  }

  function handleOption(selectedOption: string): void {
    if (selectedOption.toUpperCase() === answer.name.toUpperCase()) {
      //instrument?.stop(); //Replace this
      setEnable(true); //red buttons
      const newAnswer = setNewAnswer();
      playAnswer(newAnswer);
    } else {
      setEnable(!enable); //red buttons
    }
  }

  return (
    <>
      <ExerciseLayout col1={<Menu />} col3={<Configuration page="Notes" />}>
        <Title>Notes</Title>
        <PlayButton instrument={instrument} handlePlay={handlePlay} title={'Note?'} />
        <Options options={options} optionClassName={optionClassName} handleOptionClick={handleOption} />
        <Piano />
      </ExerciseLayout>
    </>
  );
}
