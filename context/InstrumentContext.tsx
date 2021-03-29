import React, { useEffect, useState } from 'react';
import SoundFontPlayer, { Player } from 'soundfont-player';

interface ProvidedValue {
  instrument?: Player;
}

interface Props {
  children?: React.ReactNode;
}

export const InstrumentProvider = ({ children }: Props): JSX.Element => {
  const [instrument, setInstrument] = useState<Player | undefined>(undefined);

  useEffect(() => {
    const setInitialInstrument = async (): Promise<void> => {
      const piano = await SoundFontPlayer.instrument(new AudioContext(), 'acoustic_grand_piano');
      setInstrument(piano);
      console.log('Se crea el instrumento en el context');
    };
    setInitialInstrument();
  }, []);

  return <Context.Provider value={{ instrument }}>{children}</Context.Provider>;
};

const Context = React.createContext<ProvidedValue>({
  instrument: undefined,
});

export const useInstrument = (): ProvidedValue => React.useContext(Context);
