/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useState } from 'react';
import SoundFontPlayer, { Player } from 'soundfont-player';

interface ProvidedValue {
  instrument?: Player;
  audioContext?: AudioContext;
}

interface Props {
  children?: React.ReactNode;
}

/* function localUrl(name: string): string {
  return 'context/assets/' + name + '-ogg.js';
} */

export const SoundfontContext = ({ children }: Props): JSX.Element => {
  const [instrument, setInstrument] = useState<Player>(undefined);
  const [audioContext, setAudioContext] = useState<AudioContext>(undefined);

  useEffect(() => {
    const setInitialInstrument = async (): Promise<void> => {
      console.log('Se crea el instrument context');
      const ac = getAudioContext();
      setAudioContext(ac);
      setInstrument(
        await SoundFontPlayer.instrument(ac, 'acoustic_grand_piano', { gain: 10 /*,nameToUrl: localUrl,*/ })
      );
    };
    setInitialInstrument();
  }, []);

  return <Context.Provider value={{ instrument, audioContext }}>{children}</Context.Provider>;
};

const Context = React.createContext<ProvidedValue>({
  instrument: undefined,
  audioContext: undefined,
});

export const getAudioContext = (): AudioContext => {
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

export const useInstrumentContext = (): ProvidedValue => React.useContext(Context);
