//import { Scale as ScaleType } from '@tonaljs/scale';
//import { Scale } from '@tonaljs/tonal';
import { Configuration, Options, PlayButton, Streak, Title } from 'components/Exercise';
import ExerciseLayout from 'components/Layout/ExerciseLayout';
import { Menu } from 'components/Menu';
import { Piano } from 'components/Piano';
import { useInstrumentContext } from 'context/SoundfontContext';
import useScales from 'hooks/useScales';
import { Answer } from 'hooks/useScales';
import React, { useState } from 'react';

export default function Scales(): JSX.Element {
  const { instrument } = useInstrumentContext();
  const { options, answer, setNewAnswer } = useScales();
  const [streak, setStreak] = useState(0);

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

  function handleOption(option: string): boolean {
    if (option.toUpperCase() === answer.name.toUpperCase()) {
      const newAnswer = setNewAnswer();
      playAnswer(newAnswer);
      setStreak((s) => s + 1);
      return true;
    } else {
      setStreak(0);
      return false;
    }
  }

  return (
    <>
      <ExerciseLayout col1={<Menu />} col3={<Configuration page={'Scales'} options={options} />}>
        <Title>Scales</Title>
        <PlayButton instrument={instrument} handlePlay={handlePlay} title={'Scale?'} />
        <Options options={options} handleOptionClick={handleOption} streak={streak} />
        <Streak streak={streak} />
        <Piano />
      </ExerciseLayout>
    </>
  );
}
