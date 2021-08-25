//import { Interval, Scale } from '@tonaljs/tonal';
import { Configuration, Options, PlayButton, Streak, Title } from 'components/Exercise';
import Layout from 'components/Layout';
import { Piano } from 'components/Piano';
import { useInstrumentContext } from 'context/SoundfontContext';
import useIntervals from 'hooks/useIntervals';
import { Answer } from 'hooks/useIntervals';
import React, { useState } from 'react';

export default function Intervals(): JSX.Element {
  const { instrument } = useInstrumentContext();
  const { options, answer, setNewAnswer } = useIntervals();
  const [streak, setStreak] = useState(0);

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

  function handleOption(option: string): boolean {
    //console.log('Selected option: ' + option);
    console.log(option === answer.name);
    if (option === answer.name) {
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
      <Layout rightColumn={<Configuration page={'Intervals'} options={options} />}>
        <Title>Intervals</Title>
        <PlayButton instrument={instrument} handlePlay={handlePlay} title={'Interval?'} />
        <Options options={options} handleOptionClick={handleOption} streak={streak} />
        <Streak streak={streak} />
        <Piano />
      </Layout>
    </>
  );
}
