import { Scale } from '@tonaljs/tonal';
import { Configuration, Piano, PlayButton, Title } from 'components/Exercise';
import ExerciseLayout from 'components/Layout/ExerciseLayout';
import Menu from 'components/Menu';
import { useInstrumentContext } from 'context/SoundfontContext';
import React, { useEffect, useState } from 'react';
import { getRandomItem } from 'utils/arrayUtils';

export default function Notes(): JSX.Element {
  const { instrument } = useInstrumentContext();
  const [options, setNotes] = useState<string[]>([]);
  const [answer, setAnswer] = useState<string>();
  //red buttons:
  const [enable, setEnable] = useState<boolean>(true);
  const optionClassName = enable ? 'btn btn-secondary' : 'btn btn-danger';

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
  }

  function handleOption(option: string): void {
    console.log(option === answer);
    if (option === answer) {
      //instrument?.stop(); //Replace this
      setEnable(true); //red buttons
      const note = getRandomItem(options);
      setAnswer(note);
      instrument?.play(note, 0, { duration: 2 });
      console.log(`Now playing: ${note}`);
    } else {
      setEnable(!enable); //red buttons
    }
  }

  return (
    <>
      <ExerciseLayout col1={<Menu></Menu>} col3={<Configuration page="Notes"></Configuration>}>
        <Title>Notes</Title>
        <PlayButton instrument={instrument} handlePlay={handlePlay}>
          Note?
        </PlayButton>
        {/*OPCIONES*/}
        <div className="btn-group btn-group-toggle d-flex justify-content-center" data-toggle="buttons">
          {options.map((note) => (
            <button key={note} type="button" className={optionClassName} onClick={() => handleOption(note)}>
              {note[0]}
            </button>
          ))}
        </div>

        <Piano></Piano>
      </ExerciseLayout>
    </>
  );
}
