import { Scale } from '@tonaljs/tonal';
import ExerciseLayout from 'components/Layout/ExerciseLayout';
import Menu from 'components/Menu';
import Options from 'components/Options';
import PianoBasic from 'components/PianoBasic';
import { useInstrument } from 'context/InstrumentContext';
import React, { useEffect, useState } from 'react';
import { getRandomItem } from 'utils/arrayUtils';

export default function Scales(): JSX.Element {
  // const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

  const { instrument } = useInstrument();
  const [notes, setNotes] = useState<string[]>([]);
  const [answer, setAnswer] = useState<string>();

  useEffect(() => {
    const notes = Scale.get('C major').notes;
    const note = getRandomItem(notes);
    setNotes(notes);
    setAnswer(note);
  }, []);

  function handlePlay(): void {
    instrument?.play(`${answer}3`, 0, { gain: 10 });
    console.log(`Now playing: ${answer}`);
  }

  function handleOption(option: string): void {
    console.log(option === answer);
    if (option === answer) {
      const note = getRandomItem(notes);
      setAnswer(note);
      instrument?.play(`${note}3`, 0, { gain: 10 });
      console.log(`Now playing: ${note}`);
    }
  }

  return (
    <>
      <ExerciseLayout col1={<Menu></Menu>} col3={<Options page="Scales"></Options>}>
        {/*TITLE*/}
        <div className="d-flex justify-content-center p-3 ">
          <h1 className="display-4">Scales</h1>
        </div>

        {/*PLAY SOUND*/}
        <div className="d-flex justify-content-center p-3 ">
          {instrument && (
            <button type="button" className="btn btn-primary btn-lg  p-3" aria-pressed="true" onClick={handlePlay}>
              Scale?
            </button>
          )}
          {!instrument && <div>Loading instrument...</div>}
        </div>

        {/*OPCIONES*/}
        <div className="btn-group btn-group-toggle d-flex justify-content-center" data-toggle="buttons">
          <button type="button" className="btn btn-secondary" onClick={() => handleOption('MAJOR')}>
            MAJOR
          </button>
          <button type="button" className="btn btn-secondary" onClick={() => handleOption('MENOR')}>
            MENOR
          </button>
          <button type="button" className="btn btn-secondary" onClick={() => handleOption('HARMONIC MINOR')}>
            HARMONIC MINOR
          </button>
        </div>

        {/*PIANO*/}
        <div className="d-flex justify-content-center p-3 ">
          <PianoBasic></PianoBasic>
        </div>
      </ExerciseLayout>
    </>
  );
}
