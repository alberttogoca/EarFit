//import { Scale as ScaleType } from '@tonaljs/scale';
//import { Scale } from '@tonaljs/tonal';
import { ConfigurationPlaceholder } from 'components/Configuration';
import { Options, PlayButton, Streak, Title } from 'components/Exercise';
import Layout from 'components/Layout';
import { Piano } from 'components/Piano';
import { useInstrumentContext } from 'context/EarfitContext';
import useScales from 'hooks/useScales';
import { Answer } from 'hooks/useScales';
import React, { useState } from 'react';
import Selectable from 'utils/Selectable';

export default function Scales(): JSX.Element {
  const { selectedInstrument } = useInstrumentContext();
  const { options, answer, setNewAnswer } = useScales();
  const [streak, setStreak] = useState(0);

  function playAnswer(answer: Answer): void {
    //selectedInstrument?.notePlayer?.stop(); //Replace this
    const scaleToPlay = answer.value.notes.map((note, i) => {
      return { note: note, time: i * 0.3, duration: 0.5 };
    });
    selectedInstrument?.notePlayer?.schedule(0, scaleToPlay);
    console.log(`Now playing: ${answer.name}`);
  }

  function handlePlay(): void {
    playAnswer(answer);
  }

  function handleOption(option: Selectable): boolean {
    if (option.displayName.toUpperCase() === answer.name.toUpperCase()) {
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
      <Layout rightColumn={<ConfigurationPlaceholder page={'Scales'} options={options} />}>
        <Title>Scales</Title>
        <PlayButton handlePlay={handlePlay} title={'Scale?'} />
        <Options options={options} handleOptionClick={handleOption} streak={streak} />
        <Streak streak={streak} />
        <Piano />
      </Layout>
    </>
  );
}
