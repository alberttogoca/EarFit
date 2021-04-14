import { Scale } from '@tonaljs/scale';
import { Scale as ScaleDict } from '@tonaljs/tonal';
import { Configuration, Piano, PlayButton, Title } from 'components/Exercise';
import ExerciseLayout from 'components/Layout/ExerciseLayout';
import { Menu } from 'components/Menu';
import { useInstrumentContext } from 'context/SoundfontContext';
import React, { useEffect, useState } from 'react';
import { getRandomItem } from 'utils/arrayUtils';

export default function Scales(): JSX.Element {
  const { instrument } = useInstrumentContext();
  const [options, setScales] = useState<Scale[]>([]);
  const [answer, setAnswer] = useState<Scale>(undefined);

  useEffect(() => {
    const root = 'C3';
    const ionian = ScaleDict.get([root, 'ionian']); //major
    const dorian = ScaleDict.get([root, 'dorian']);
    const phrygian = ScaleDict.get([root, 'phrygian']);
    const lydian = ScaleDict.get([root, 'lydian']);
    const mixolydian = ScaleDict.get([root, 'mixolydian']);
    const aolian = ScaleDict.get([root, 'aeolian']); //minor
    const locrian = ScaleDict.get([root, 'locrian']);

    const scalesArray = [ionian, dorian, phrygian, lydian, mixolydian, aolian, locrian];
    setScales(scalesArray);
    setAnswer(getRandomItem(scalesArray));
  }, []);

  async function playScale(): Promise<void> {
    //instrument?.stop(); //Replace this

    const scaleToPlay = answer.notes.map((note, i) => {
      return { note: note, time: i * 0.3, duration: 0.5 };
    });

    instrument?.schedule(0, scaleToPlay);

    console.log(`Answer: ${answer.name}`);
    console.log(`Now playing: ${answer.notes}`);
  }

  function handlePlay(): void {
    playScale();
  }

  async function handleOption(option: string): Promise<void> {
    console.log(option === answer.name);
    if (option === answer.name) {
      const newScale = getRandomItem(options);
      setAnswer(newScale);
      console.log(`New Scale: ${newScale.name}`);
      //TO DO: Asegurarse de que el answer se ha actualizado antes de playScale
      playScale();
      /* await startNote('vibraphone', 'A5', { duration: 500, gain: 10 });
      await delay(900);
      await stopNote('vibraphone', 'A5'); */
    } else {
      /* await startNote('trombone', 'C2', { duration: 500, gain: 10 });
      await delay(300);
      await stopNote('trombone', 'C2'); */
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
            {options.map((optionItem) => (
              <button
                key={optionItem.name}
                type="button"
                className="btn btn-secondary"
                onClick={() => handleOption(optionItem.name)}
              >
                {optionItem.name.slice(2).toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        <Piano></Piano>
      </ExerciseLayout>
    </>
  );
}
