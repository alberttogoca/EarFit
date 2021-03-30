import { getInstrument, NotePlayer } from 'music-instrument-js';
import React, { useEffect, useState } from 'react';

interface ProvidedValue {
  instrument?: NotePlayer;
}

interface Props {
  children?: React.ReactNode;
}

export const InstrumentProvider = ({ children }: Props): JSX.Element => {
  const [instrument, setInstrument] = useState<NotePlayer>(undefined);

  useEffect(() => {
    const setInitialInstrument = async (): Promise<void> => {
      console.log('Se crea el instrument context');
      setInstrument(await getInstrument('acoustic_grand_piano'));
    };
    setInitialInstrument();
  }, []);

  return <Context.Provider value={{ instrument }}>{children}</Context.Provider>;
};

const Context = React.createContext<ProvidedValue>({
  instrument: undefined,
});

export const useInstrument = (): ProvidedValue => React.useContext(Context);
