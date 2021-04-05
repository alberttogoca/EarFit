import { Interval } from '@tonaljs/scale';
import { Interval as IntervalDict } from '@tonaljs/tonal';
import ExerciseLayout from 'components/Layout/ExerciseLayout';
import Menu from 'components/Menu';
import Options from 'components/Options';
import PianoBasic from 'components/PianoBasic';
import { useInstrumentContext } from 'context/SoundfontContext';
import React, { useEffect, useState } from 'react';
import { getRandomItem } from 'utils/arrayUtils';
export default function Intervals(): JSX.Element {
  const { instrument } = useInstrumentContext();
  const [intervals, setIntervals] = useState<Interval[]>([]);
  const [answer, setAnswer] = useState<Interval>(undefined);

  useEffect(() => {
    console.log(IntervalDict.names());
    const p1 = IntervalDict.get('1P');
    const m2 = IntervalDict.get('2M');
    const m3 = IntervalDict.get('3M');

    const intervalArray = [p1, m2, m3];
    setIntervals(intervalArray);
    setAnswer(getRandomItem(intervalArray));
  }, []);

  async function playInterval(): Promise<void> {
    instrument?.stop();
    //TO DO: sacar de answer.notes este array
    const intervalToPlay = [
      { note: 'C3', time: 0 },
      { note: 'Bb3', time: 0.5 },
    ];

    instrument?.schedule(0, intervalToPlay);

    console.log(`Answer: ${answer.name}`);
  }

  function handlePlay(): void {
    playInterval();
  }

  async function handleOption(option: string): Promise<void> {
    console.log(option === answer.name);
    if (option === answer.name) {
      const newinterval = getRandomItem(intervals);
      setAnswer(newinterval);
      console.log(`New Interval: ${newinterval.name}`);
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
              Note?
            </button>
          )}
          {!instrument && <div>Loading instrument...</div>}
        </div>

        {/*OPCIONES*/}
        <div className="btn-group btn-group-toggle d-flex justify-content-center" data-toggle="buttons">
          <div>
            {intervals.map((interval) => (
              <button
                key={interval.name}
                type="button"
                className="btn btn-secondary"
                onClick={() => handleOption(interval.name)}
              >
                {interval.name.toUpperCase()}
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
