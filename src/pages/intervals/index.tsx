//import { Interval, Scale } from '@tonaljs/tonal';
import { Configuration, Options, PlayButton, Title } from 'components/Exercise';
import ExerciseLayout from 'components/Layout/ExerciseLayout';
import { Menu } from 'components/Menu';
import { Piano } from 'components/Piano';
import { useInstrumentContext } from 'context/SoundfontContext';
import useIntervals from 'hooks/useIntervals';
import { Answer } from 'hooks/useIntervals';
import React, { useState } from 'react';

export default function Intervals(): JSX.Element {
  const { instrument } = useInstrumentContext();
  const { options, answer, setNewAnswer } = useIntervals();

  //red buttons:
  const [enable, setEnable] = useState<boolean>(true);
  const optionClassName = enable ? 'btn btn-secondary' : 'btn btn-danger';

  function playAnswer(answer: Answer): void {
    //instrument?.stop(); //Replace this
    const intervalToPlay = [
      { note: answer.value.note1, time: 0, duration: 2 },
      { note: answer.value.note2, time: 0.5, duration: 2 },
    ];

    instrument?.schedule(0, intervalToPlay);

    console.log(`Answer: ${answer.name}`);
  }

  function handlePlay(): void {
    playAnswer(answer);
  }

  function handleOption(option: string): void {
    //console.log('Selected option: ' + option);
    console.log(option === answer.name);
    if (option === answer.name) {
      setEnable(true); //red buttons
      const newAnswer = setNewAnswer();
      playAnswer(newAnswer);
    } else {
      setEnable(!enable); //red buttons
    }
  }

  return (
    <>
      <ExerciseLayout col1={<Menu />} col3={<Configuration page="Intervals" />}>
        <Title>Intervals</Title>
        <PlayButton instrument={instrument} handlePlay={handlePlay} title={'Interval?'} />
        <Options options={options} optionClassName={optionClassName} handleOptionClick={handleOption} />
        <Piano />
      </ExerciseLayout>
    </>
  );
}
