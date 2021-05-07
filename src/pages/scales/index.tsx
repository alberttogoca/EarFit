import { Scale as ScaleType } from '@tonaljs/scale';
//import { Scale } from '@tonaljs/tonal';
import { Configuration, Options, PlayButton, Title } from 'components/Exercise';
import ExerciseLayout from 'components/Layout/ExerciseLayout';
import { Menu } from 'components/Menu';
import { Piano } from 'components/Piano';
import { useInstrumentContext } from 'context/SoundfontContext';
import useScales from 'hooks/useScales';
import React, { useState } from 'react';

interface Answer {
  name: string;
  value: ScaleType;
}

export default function Scales(): JSX.Element {
  const { instrument } = useInstrumentContext();
  const { options, answer, setNewAnswer } = useScales();

  //red buttons:
  const [enable, setEnable] = useState<boolean>(true);
  const optionClassName = enable ? 'btn btn-secondary' : 'btn btn-danger';

  function playAnswer(answer: Answer): void {
    //instrument?.stop(); //Replace this
    const scaleToPlay = answer.value.notes.map((note, i) => {
      return { note: note, time: i * 0.3, duration: 0.5 };
    });
    instrument?.schedule(0, scaleToPlay);
    console.log(`Now playing: ${answer.name}`);
  }

  function handlePlay(): void {
    playAnswer(answer);
  }

  function handleOption(option: string): void {
    if (option.toUpperCase() === answer.name.toUpperCase()) {
      setEnable(true); //red buttons
      const newAnswer = setNewAnswer();
      playAnswer(newAnswer);
    } else {
      setEnable(!enable); //red buttons
    }
  }

  return (
    <>
      <ExerciseLayout col1={<Menu />} col3={<Configuration page="Scales" />}>
        <Title>Scales</Title>
        <PlayButton instrument={instrument} handlePlay={handlePlay} title={'Scale?'} />
        <Options options={options} optionClassName={optionClassName} handleOptionClick={handleOption} />
        <Piano />
      </ExerciseLayout>
    </>
  );
}
