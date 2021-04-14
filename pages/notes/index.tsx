import { Scale } from '@tonaljs/tonal';
import { Configuration, Options, Piano, PlayButton, Title } from 'components/Exercise';
import ExerciseLayout from 'components/Layout/ExerciseLayout';
import { Menu } from 'components/Menu';
import { useInstrumentContext } from 'context/SoundfontContext';
import React, { useEffect, useState } from 'react';
import { getRandomItem } from 'utils/arrayUtils';

interface Answer {
  name: string;
  value: string;
}

export default function Notes(): JSX.Element {
  const { instrument } = useInstrumentContext();
  const [notes, setNotes] = useState<string[]>([]);
  const [options, setOptions] = useState<string[]>([]);
  const [answer, setAnswer] = useState<Answer>();
  //red buttons:
  const [enable, setEnable] = useState<boolean>(true);
  const optionClassName = enable ? 'btn btn-secondary' : 'btn btn-danger';

  useEffect(() => {
    const root = 'C';
    const octave = '3';
    const modes = Scale.modeNames(root + octave + ' major'); //si pongo la octava en el play luego no tengo que hacer slice
    const scaleList = modes.map(([r, n]) => Scale.get([r, n]));
    const scaleMajor = scaleList[0].notes;
    const noteList = scaleMajor; //major
    const noteNames = scaleMajor.map((n) => n.slice(0, -1));
    setNotes(noteList);
    setOptions(noteNames);
    const value = getRandomItem(noteList);
    const name = value.slice(0, -1);
    const newAnswer = { name, value };
    setAnswer(newAnswer);
  }, []);

  function playAnswer(answer: Answer): void {
    //instrument?.stop(); //Replace this
    instrument?.play(answer.value, 0, { duration: 2 });
    console.log(`Now playing: ${answer.name}`);
  }

  function handlePlay(): void {
    playAnswer(answer);
  }

  function handleOption(selectedOption: string): void {
    if (selectedOption.toUpperCase() === answer.name.toUpperCase()) {
      //instrument?.stop(); //Replace this
      setEnable(true); //red buttons
      const value = getRandomItem(notes);
      const name = value.slice(0, -1);
      const newAnswer = { name, value };
      setAnswer(newAnswer);
      playAnswer(newAnswer);
    } else {
      setEnable(!enable); //red buttons
    }
  }

  return (
    <>
      <ExerciseLayout col1={<Menu></Menu>} col3={<Configuration page="Notes"></Configuration>}>
        <Title>Notes</Title>
        <PlayButton instrument={instrument} onClick={handlePlay} title={'Note?'}></PlayButton>
        {/*OPCIONES*/}
        <div className="btn-group btn-group-toggle d-flex justify-content-center" data-toggle="buttons">
          <div>
            {options.map((option) => (
              <button key={option} type="button" className={optionClassName} onClick={() => handleOption(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
        {/* <Options options={options} optionClassName={optionClassName} onClick={() => handleOption(option)}></Options> */}
        <Piano></Piano>
      </ExerciseLayout>
    </>
  );
}
