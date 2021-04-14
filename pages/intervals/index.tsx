//import { Interval, NoInterval } from '@tonaljs/core';
import { Interval as IntervalDict } from '@tonaljs/tonal';
import Configuration from 'components/Exercise/Configuration';
//import { getRandomItem } from 'utils/arrayUtils';
import { Piano } from 'components/Exercise/Piano';
import { PlayButton } from 'components/Exercise/PlayButton';
import { Title } from 'components/Exercise/Title';
import ExerciseLayout from 'components/Layout/ExerciseLayout';
import Menu from 'components/Menu';
import { useInstrumentContext } from 'context/SoundfontContext';
import React, { useEffect, useState } from 'react';

interface IInterval {
  note1: string;
  note2: string;
}

export default function Intervals(): JSX.Element {
  const { instrument } = useInstrumentContext();
  const [intervals, setIntervals] = useState<string[]>([]);
  const [answer, setAnswer] = useState<IInterval>(undefined);

  useEffect(() => {
    console.log(IntervalDict.names());
    const answer = { note1: 'C4', note2: 'G4' };
    setIntervals(IntervalDict.names());
    setAnswer(answer);
  }, []);

  async function playInterval(): Promise<void> {
    //instrument?.stop(); //Replace thiss
    //TO DO: sacar de answer.notes este array
    const intervalToPlay = [
      { note: 'C4', time: 0, duration: 2 },
      { note: 'G4', time: 0.5, duration: 2 },
    ];

    instrument?.schedule(0, intervalToPlay);

    console.log(`Answer: ${IntervalDict.distance(answer.note1, answer.note2)}`);
  }

  function handlePlay(): void {
    playInterval();
  }

  async function handleOption(option: string): Promise<void> {
    const result = IntervalDict.distance(answer.note1, answer.note2);
    console.log(option === result);
    if (option === result) {
      //const newinterval = getRandomItem(intervals);
      //setAnswer(newinterval);
      //console.log(`New Interval: ${newinterval.name}`);
      //TO DO: Asegurarse de que el answer se ha actualizado antes de playScale
      playInterval();
    }
  }

  return (
    <>
      <ExerciseLayout col1={<Menu></Menu>} col3={<Configuration page="Intervals"></Configuration>}>
        <Title>Intervals</Title>

        <PlayButton instrument={instrument} handlePlay={handlePlay}>
          Interval?
        </PlayButton>

        {/*OPCIONES*/}
        <div className="btn-group btn-group-toggle d-flex justify-content-center" data-toggle="buttons">
          <div>
            {intervals.map((interval) => (
              <button key={interval} type="button" className="btn btn-secondary" onClick={() => handleOption(interval)}>
                {interval.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <Piano></Piano>
      </ExerciseLayout>
    </>
  );
}
