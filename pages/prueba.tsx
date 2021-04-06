/* eslint-disable @typescript-eslint/ban-ts-comment */

import ExerciseLayout from 'components/Layout/ExerciseLayout';
import Menu from 'components/Menu';
import Options from 'components/Options';
import React, { useEffect, useState } from 'react';
import SoundFontPlayer, { Player } from 'soundfont-player';

export default function Prueba(): JSX.Element {
  const [instrument, setInstrument] = useState<Player>(undefined);

  useEffect(() => {
    const setInitialInstrument = async (): Promise<void> => {
      console.log('Se crea el instrument alone');
      const ac = getAudioContext();

      /* const vca = ac.createGain();
      vca.gain.value = 10;
      vca.connect(ac.destination); */

      setInstrument(
        await SoundFontPlayer.instrument(
          ac,
          'acoustic_grand_piano',
          { gain: 10 } /* , {
            destination: vca 
            nameToUrl: localUrl,
        } */
        )
      );
    };
    setInitialInstrument();
  }, []);

  const getAudioContext = (): AudioContext => {
    const AudioContext =
      // @ts-ignore
      window.AudioContext || // Default
      // @ts-ignore
      window.webkitAudioContext || // Safari and old versions of Chrome
      false;
    if (!AudioContext) {
      console.warn(
        'Sorry but the WebAudio API is not supported on this browser. Please consider using Chrome or Safari for the best experience '
      );
      // @ts-ignore
      return {};
      // throw new Error('PLATFORM_NOT_SUPPORTED');
    }
    return new AudioContext();
  };

  function handlePlay(): void {
    instrument?.stop();
    instrument?.play('C3', 0, { duration: 2 });
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
