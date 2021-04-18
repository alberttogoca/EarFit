import { Interval, Scale } from '@tonaljs/tonal';
import { Configuration, PlayButton, Title } from 'components/Exercise';
import { Options } from 'components/Exercise/Options';
//import { getRandomItem } from 'utils/arrayUtils';
import ExerciseLayout from 'components/Layout/ExerciseLayout';
import { Menu } from 'components/Menu';
import { Piano } from 'components/Piano';
import { useInstrumentContext } from 'context/SoundfontContext';
import React, { useEffect, useState } from 'react';
import { getRandomItem } from 'utils/arrayUtils';

interface IntervalNotes {
  note1: string;
  note2: string;
}

interface Answer {
  name: string;
  value: IntervalNotes;
}

export default function Intervals(): JSX.Element {
  const { instrument } = useInstrumentContext();
  const [notes, setNotes] = useState<string[]>([]);
  const [options, setOptions] = useState<string[]>([]);
  const [answer, setAnswer] = useState<Answer>(undefined);
  //red buttons:
  const [enable, setEnable] = useState<boolean>(true);
  const optionClassName = enable ? 'btn btn-secondary' : 'btn btn-danger';

  useEffect(() => {
    console.log(Interval.simplify(Interval.distance('B#3', 'Eb')));
    const tonic = 'C';
    const octave = '3';
    const pattern = 'major';
    const modes = Scale.modeNames(tonic + octave + ' ' + pattern);
    const scaleList = modes.map(([r, n]) => Scale.get([r, n]));
    const noteList = scaleList[0].notes; //major
    //noteList.forEach((n) => console.log(Interval.distance('B3', n)));
    setNotes(noteList);
    //INFO: +/-: direccion, 2: distancia notas, P/M/m/A/dd/d?: justa/mayor/menor/aumentado/disminuido/? (semitonos)
    setOptions(Interval.names()); // TO DO: sacar todos los intervalos de las notas que se van a tocar
    const n1 = getRandomItem(noteList);
    const n2 = getRandomItem(noteList); // TO DO: que esta nota sea siempre mayor
    const value = { note1: n1, note2: n2 };
    const name = Interval.distance(value.note1, value.note2);
    const answer = { name, value };
    setAnswer(answer);
  }, []);

  async function playAnswer(answer: Answer): Promise<void> {
    //instrument?.stop(); //Replace thiss
    //TO DO: sacar de answer.notes este array
    const intervalToPlay = [
      { note: answer.value.note1, time: 0, duration: 2 },
      { note: answer.value.note2, time: 0.5, duration: 2 },
    ];

    instrument?.schedule(0, intervalToPlay);

    console.log(`Answer: ${answer.name}`);
  }

  function handlePlay(): void {
    playAnswer(answer);
  }

  async function handleOption(option: string): Promise<void> {
    //console.log('Selected option: ' + option);
    console.log(option === answer.name);
    if (option === answer.name) {
      setEnable(true); //red buttons
      const n1 = getRandomItem(notes);
      const n2 = getRandomItem(notes);
      const value = { note1: n1, note2: n2 };
      const name = Interval.distance(value.note1, value.note2);
      const newAnswer = { name, value };
      setAnswer(newAnswer);
      playAnswer(newAnswer);
    } else {
      setEnable(!enable); //red buttons
    }
  }

  return (
    <>
      <ExerciseLayout col1={<Menu></Menu>} col3={<Configuration page="Intervals"></Configuration>}>
        <Title>Intervals</Title>
        <PlayButton instrument={instrument} onClick={handlePlay} title={'Interval?'}></PlayButton>
        <Options options={options} optionClassName={optionClassName} handleOptionClick={handleOption}></Options>
        <Piano />
      </ExerciseLayout>
    </>
  );
}
