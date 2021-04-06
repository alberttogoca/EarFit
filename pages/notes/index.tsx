import { Scale } from '@tonaljs/tonal';
import ExerciseLayout from 'components/Layout/ExerciseLayout';
import Menu from 'components/Menu';
import Options from 'components/Options';
import PianoBasic from 'components/PianoBasic';
//import { useInstrument } from 'context/InstrumentContext';
import { useInstrumentContext } from 'context/SoundfontContext';
import React, { useEffect, useState } from 'react';
import { getRandomItem } from 'utils/arrayUtils';

export default function Notes(): JSX.Element {
  //const { instrument } = useInstrument();
  const { instrument } = useInstrumentContext();
  const [notes, setNotes] = useState<string[]>([]);
  const [answer, setAnswer] = useState<string>();

  useEffect(() => {
    const notes = Scale.get('C3 major').notes;
    const note = getRandomItem(notes);
    setNotes(notes);
    setAnswer(note);
  }, []);

  function handlePlay(): void {
    //instrument?.stop(); //Replace this
    instrument?.play(answer, 0, { duration: 2 });
    console.log(`Now playing: ${answer}`);
    //instrument?.play(`${answer}3`, { gain: 10 });
  }

  function handleOption(option: string): void {
    console.log(option === answer);
    if (option === answer) {
      const note = getRandomItem(notes);
      setAnswer(note);
      //instrument?.stop(); //Replace this
      instrument?.play(note, 0, { duration: 2 });
      console.log(`Now playing: ${note}`);
      //instrument?.play(`${note}3`, { gain: 10 });
    }
  }

  return (
    <>
      <ExerciseLayout col1={<Menu></Menu>} col3={<Options page="Notes"></Options>}>
        {/*TITLE*/}
        <div className="d-flex justify-content-center p-3 ">
          <h1 className="display-4 ">Notes</h1>
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
          {notes.map((note) => (
            <button key={note} type="button" className="btn btn-secondary" onClick={() => handleOption(note)}>
              {note[0]}
            </button>
          ))}
        </div>

        {/*PIANO*/}
        <div className="d-flex justify-content-center p-3 ">
          <PianoBasic></PianoBasic>
        </div>
      </ExerciseLayout>
    </>
  );
}
