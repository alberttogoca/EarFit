import { Interval } from '@tonaljs/tonal';
import { Configuration, Piano, PlayButton, Title } from 'components/Exercise';
//import { getRandomItem } from 'utils/arrayUtils';
import ExerciseLayout from 'components/Layout/ExerciseLayout';
import { Menu } from 'components/Menu';
import { useInstrumentContext } from 'context/SoundfontContext';
import React, { useEffect, useState } from 'react';

interface IInterval {
  note1: string;
  note2: string;
}

export default function Intervals(): JSX.Element {
  const { instrument } = useInstrumentContext();
  const [options, setIntervals] = useState<string[]>([]);
  const [answer, setAnswer] = useState<IInterval>(undefined);
  //red buttons:
  const [enable, setEnable] = useState<boolean>(true);
  const optionClassName = enable ? 'btn btn-secondary' : 'btn btn-danger';

  useEffect(() => {
    console.log(Interval.names());
    const answer = { note1: 'C4', note2: 'G4' };
    setIntervals(Interval.names());
    setAnswer(answer);
  }, []);

  async function playInterval(): Promise<void> {
    //instrument?.stop(); //Replace thiss
    //TO DO: sacar de answer.notes este array
    const intervalToPlay = [
      { note: 'C4', time: 0, duration: 2 },
      { note: 'G4', time: 0.5, duration: 2 },
    ];

    instrument?.schedule(0, intervalToPlay);

    console.log(`Answer: ${Interval.distance(answer.note1, answer.note2)}`);
  }

  function handlePlay(): void {
    playInterval();
  }

  async function handleOption(option: string): Promise<void> {
    const result = Interval.distance(answer.note1, answer.note2);
    if (option === result) {
      setEnable(true); //red buttons

      //const newinterval = getRandomItem(intervals);
      //setAnswer(newinterval);
      //console.log(`New Interval: ${newinterval.name}`);
      //TO DO: Asegurarse de que el answer se ha actualizado antes de playScale
      playInterval();
    } else {
      setEnable(!enable); //red buttons
    }
  }

  return (
    <>
      <ExerciseLayout col1={<Menu></Menu>} col3={<Configuration page="Intervals"></Configuration>}>
        <Title>Intervals</Title>
        <PlayButton instrument={instrument} onClick={handlePlay} title={'Interval?'}></PlayButton>
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
