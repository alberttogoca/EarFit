import React, { useEffect, useState } from 'react';
import SoundFontPlayer, { Player } from 'soundfont-player';

interface ProvidedValue {
  instrument?: Player;
}

interface Props {
  children?: React.ReactNode;
}

const getAudioContext = (): AudioContext => {
  const AudioContext = window.AudioContext || window['webkitAudioContext'];

  if (!AudioContext) {
    console.warn('Sorry but the WebAudio API is not supported on this browser.');
    throw new Error('PLATFORM_NOT_SUPPORTED');
  }
  return new AudioContext();
};

export const SoundfontContext = ({ children }: Props): JSX.Element => {
  const [instrument, setInstrument] = useState<Player>(undefined);

  useEffect(() => {
    const setInitialInstrument = async (): Promise<void> => {
      const ac = getAudioContext();
      const newInstrument = await SoundFontPlayer.instrument(ac, 'acoustic_grand_piano', {
        gain: 10,
        nameToUrl: (name: string) => '/instruments/' + name + '-mp3.js',
      });
      setInstrument(newInstrument);
    };
    setInitialInstrument();
  }, []);

  return <Context.Provider value={{ instrument }}>{children}</Context.Provider>;
};

const Context = React.createContext<ProvidedValue>({
  instrument: undefined,
});

export const useInstrument = (): ProvidedValue => React.useContext(Context);
