/* eslint-disable @typescript-eslint/ban-ts-comment */
import ExerciseLayout from 'components/Layout/ExerciseLayout';
import Menu from 'components/Menu';
import Options from 'components/Options';
import { getInstrument, NotePlayer } from 'music-instrument-js';
import React, { useEffect, useState } from 'react';

export default function Prueba(): JSX.Element {
  const [instrument, setInstrument] = useState<NotePlayer>(undefined);

  useEffect(() => {
    const setInitialInstrument = async (): Promise<void> => {
      console.log('Se crea el instrument context');
      setInstrument(await getInstrument('acoustic_grand_piano'));
    };
    setInitialInstrument();
  }, []);

  function handlePlay(): void {
    instrument?.stop();
    instrument?.play('C3', { duration: 200, gain: 10 });
    console.log(`Now playing: C3`);
    //instrument?.play(`${answer}3`, { gain: 10 });
  }

  return (
    <>
      <ExerciseLayout col1={<Menu></Menu>} col3={<Options page="Prueba"></Options>}>
        {/*TITLE*/}
        <div className="d-flex justify-content-center p-3 ">
          <h1 className="display-4 ">Prueba</h1>
        </div>

        {/*PLAY SOUND*/}
        <div className="d-flex justify-content-center p-3 ">
          {instrument && (
            <button type="button" className="btn btn-primary btn-lg  p-3" aria-pressed="true" onClick={handlePlay}>
              Prueba?
            </button>
          )}
          {!instrument && <div>Loading instrument...</div>}
        </div>
      </ExerciseLayout>
    </>
  );
}
