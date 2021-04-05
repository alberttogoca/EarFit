import React, { useEffect, useState } from 'react';
import SoundFontPlayer, { Player } from 'soundfont-player';

interface ProvidedValue {
  instrument?: Player;
}

interface Props {
  children?: React.ReactNode;
}

/* function localUrl(name: string): string {
  return 'context/assets/' + name + '-ogg.js';
} */

export const SoundfontContext = ({ children }: Props): JSX.Element => {
  const [instrument, setInstrument] = useState<Player>(undefined);

  useEffect(() => {
    const setInitialInstrument = async (): Promise<void> => {
      console.log('Se crea el instrument context');
      const ac = getAudioContext();

      const vca = ac.createGain();
      vca.gain.value = 10;
      vca.connect(ac.destination);

      setInstrument(
        await SoundFontPlayer.instrument(
          ac,
          'acoustic_grand_piano',
          { destination: vca } /* , {
          nameToUrl: localUrl,
        } */
        )
      );
    };
    setInitialInstrument();
  }, []);

  return <Context.Provider value={{ instrument }}>{children}</Context.Provider>;
};

const Context = React.createContext<ProvidedValue>({
  instrument: undefined,
});

const getAudioContext = function (): AudioContext | any {
  const AudioContext = window.AudioContext /*|| window.webkitAudioContext */ || false;
  if (!AudioContext) {
    console.warn(
      'Sorry but the WebAudio API is not supported on this browser. Please consider using Chrome or Safari for the best experience '
    );
    return {};
  }
  return new AudioContext();
};

export const useInstrumentContext = (): ProvidedValue => React.useContext(Context);
