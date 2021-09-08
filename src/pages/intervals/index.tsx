//import { Interval, Scale } from '@tonaljs/tonal';
import { ConfigurationPlaceholder } from 'components/Configuration';
import { Options, Piano, PlayButton, Streak, Title } from 'components/Exercise';
import Layout from 'components/Layout';
import { useInstrumentContext } from 'context/EarfitContext';
import useIntervals, { Answer } from 'hooks/useIntervals';
import { useState } from 'react';
import Selectable from 'utils/Selectable';

export default function Intervals(): JSX.Element {
  const { selectedInstrument } = useInstrumentContext();
  const { options, answer, setNewAnswer } = useIntervals();
  const [streak, setStreak] = useState(0);

  function playAnswer(answer: Answer): void {
    //selectedInstrument?.notePlayer?.stop(); //Replace this
    const intervalToPlay = [
      { note: answer.value.note1, time: 0, duration: 2 },
      { note: answer.value.note2, time: 0.5, duration: 2 },
    ];

    selectedInstrument?.notePlayer?.schedule(0, intervalToPlay);

    console.log(`Answer: ${answer.name}`);
  }

  function handlePlay(): void {
    playAnswer(answer);
  }

  function handleOption(option: Selectable): boolean {
    //console.log('Selected option: ' + option);
    console.log(option.displayName === answer.name);
    if (option.displayName === answer.name) {
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
      <Layout rightColumn={<ConfigurationPlaceholder page={'Intervals'} options={options} />}>
        <Title>Intervals</Title>
        <PlayButton handlePlay={handlePlay} title={'Interval?'} />
        <Options options={options} handleOptionClick={handleOption} streak={streak} />
        <Streak streak={streak} />
        <Piano />
      </Layout>
    </>
  );
}
