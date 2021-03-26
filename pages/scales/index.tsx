import ExerciseLayout from 'components/Layout/ExerciseLayout';
import Menu from 'components/Menu';
import { Options } from 'components/Options';
import PianoBasic from 'components/PianoBasic';
import { getInstrument, NotePlayer } from 'music-instrument-js';
import React, { useEffect, useState } from 'react';

export default function Scales(): JSX.Element {
  // const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

  const [instrument, setInstrument] = useState<NotePlayer>(undefined);

  useEffect(() => {
    const loadInstrument = async (): Promise<void> => {
      const piano = await getInstrument('acoustic_grand_piano');
      setInstrument(piano);
    };
    loadInstrument();
  }, []);

  function handleClick(): void {
    instrument.play('A3', {});
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
          <button type="button" className="btn btn-primary btn-lg  p-3" aria-pressed="true" onClick={handleClick}>
            Escala?
          </button>
        </div>

        {/*OPCIONES*/}
        <div className="btn-group btn-group-toggle d-flex justify-content-center" data-toggle="buttons">
          <button type="button" className="btn btn-secondary" id="option1">
            {' '}
            MAJOR{' '}
          </button>
          <button type="button" className="btn btn-secondary" id="option2">
            {' '}
            MENOR{' '}
          </button>
          <button type="button" className="btn btn-secondary" id="option3">
            {' '}
            HARMONIC MINOR{' '}
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
