import { Scale } from '@tonaljs/scale';
import { Scale as ScaleDict } from '@tonaljs/tonal';
import ExerciseLayout from 'components/Layout/ExerciseLayout';
import Menu from 'components/Menu';
import Options from 'components/Options';
import PianoBasic from 'components/PianoBasic';
import { useInstrument } from 'context/InstrumentContext';
import { startNote, stopNote } from 'music-instrument-js';
import React, { useEffect, useState } from 'react';
import { getRandomItem } from 'utils/arrayUtils';

export default function Scales(): JSX.Element {
  const { instrument } = useInstrument();
  const [scales, setScales] = useState<Scale[]>([]);
  const [answer, setAnswer] = useState<Scale>(undefined);
  const [playing, setPlaying] = useState<boolean>(false);

  const delay = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    const root = 'C';
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
    setPlaying(true);

    const options = { duration: 500, gain: 10 };

    console.log(`Answer: ${answer.name}`);
    console.log(`Now playing: ${answer.notes}`);

    for (let i = 0; i < answer.notes.length; i++) {
      instrument?.play(answer.notes[i] + '3', options);
      await delay(300);
    }

    setPlaying(false);
  }

  function handlePlay(): void {
    if (!playing) {
      playScale();
    }
  }

  async function handleOption(option: string): Promise<void> {
    console.log(option === answer.name);
    if (option === answer.name) {
      setAnswer(getRandomItem(scales));
      //TO DO: Asegurarse de que el answer se ha actualizado antes de playScale
      //Cambiar sonido de acierto por reproducir siguiente escala y boton verde
      await startNote('vibraphone', 'A5', { duration: 500, gain: 10 });
      await delay(900);
      await stopNote('vibraphone', 'A5');
    } else {
      await startNote('trombone', 'C2', { duration: 500, gain: 10 });
      await delay(300);
      await stopNote('trombone', 'C2');
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
          <div>
            {scales.map((scale) => (
              <button
                key={scale.name}
                type="button"
                className="btn btn-secondary"
                onClick={() => handleOption(scale.name)}
              >
                {scale.name.slice(2).toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/*PIANO*/}
        <div className="d-flex justify-content-center p-3 ">
          <PianoBasic></PianoBasic>
        </div>
      </ExerciseLayout>
    </>
  );
}
