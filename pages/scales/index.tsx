import { Scale as ScaleType } from '@tonaljs/scale';
import { Scale } from '@tonaljs/tonal';
import { Configuration, Piano, PlayButton, Title } from 'components/Exercise';
import ExerciseLayout from 'components/Layout/ExerciseLayout';
import { Menu } from 'components/Menu';
import { useInstrumentContext } from 'context/SoundfontContext';
import React, { useEffect, useState } from 'react';
import { getRandomItem } from 'utils/arrayUtils';

interface Answer {
  name: string;
  value: ScaleType;
}

export default function Scales(): JSX.Element {
  const { instrument } = useInstrumentContext();
  const [scales, setScales] = useState<ScaleType[]>([]);
  const [options, setOptions] = useState<string[]>([]);
  const [answer, setAnswer] = useState<Answer>();
  //red buttons:
  const [enable, setEnable] = useState<boolean>(true);
  const optionClassName = enable ? 'btn btn-secondary' : 'btn btn-danger';

  useEffect(() => {
    const tonic = 'C';
    const octave = '3';
    const pattern = 'major';
    const modes = Scale.modeNames(tonic + octave + ' ' + pattern);
    const scaleList = modes.map(([root, mode]) => Scale.get([root, mode])); //Obtaining notes for each mode
    const scaleNames = scaleList.map((m) => m.type.toUpperCase());
    setScales(scaleList);
    setOptions(scaleNames);
    const value = getRandomItem(scaleList);
    const name = value.type;
    const newAnswer = { name, value };
    setAnswer(newAnswer);
  }, []);

  function playAnswer(answer: Answer): void {
    //instrument?.stop(); //Replace this
    const scaleToPlay = answer.value.notes.map((note, i) => {
      return { note: note, time: i * 0.3, duration: 0.5 };
    });
    instrument?.schedule(0, scaleToPlay);
    console.log(`Now playing: ${answer.name}`);
  }

  function handlePlay(): void {
    playAnswer(answer);
  }

  async function handleOption(option: string): Promise<void> {
    if (option.toUpperCase() === answer.name.toUpperCase()) {
      setEnable(true); //red buttons
      const value = getRandomItem(scales);
      const name = value.type;
      const newAnswer = { name, value };
      setAnswer(newAnswer);
      playAnswer(newAnswer);
    } else {
      setEnable(!enable); //red buttons
    }
  }

  return (
    <>
      <ExerciseLayout col1={<Menu></Menu>} col3={<Configuration page="Scales"></Configuration>}>
        <Title>Scales</Title>
        <PlayButton instrument={instrument} onClick={handlePlay} title={'Scale?'}></PlayButton>
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
        <Piano></Piano>
      </ExerciseLayout>
    </>
  );
}
