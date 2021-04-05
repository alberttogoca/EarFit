import { Interval, NoInterval } from '@tonaljs/core';
import { Interval as IntervalDict } from '@tonaljs/tonal';
import ExerciseLayout from 'components/Layout/ExerciseLayout';
import Menu from 'components/Menu';
import Options from 'components/Options';
import PianoBasic from 'components/PianoBasic';
import { useInstrumentContext } from 'context/SoundfontContext';
import React, { useEffect, useState } from 'react';
import { getRandomItem } from 'utils/arrayUtils';

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
    instrument?.stop();
    //TO DO: sacar de answer.notes este array
    const intervalToPlay = [
      { note: 'C4', time: 0 },
      { note: 'G4', time: 0.5 },
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
      <ExerciseLayout col1={<Menu></Menu>} col3={<Options page="Intervals"></Options>}>
        {/*TITLE*/}
        <div className="d-flex justify-content-center p-3 ">
          <h1 className="display-4">Intervals</h1>
        </div>

        {/*PLAY SOUND*/}
        <div className="d-flex justify-content-center p-3 ">
          {instrument && (
            <button type="button" className="btn btn-primary btn-lg  p-3" aria-pressed="true" onClick={handlePlay}>
              Interval?
            </button>
          )}
          {!instrument && <div>Loading instrument...</div>}
        </div>

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

        {/*PIANO*/}
        <div className="d-flex justify-content-center p-3 ">
          <PianoBasic></PianoBasic>
        </div>
      </ExerciseLayout>
    </>
  );
}
