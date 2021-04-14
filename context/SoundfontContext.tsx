import { getInstrument, NotePlayer } from 'context/soundfont-wrapper';
import React, { useEffect, useState } from 'react';

interface ProvidedValue {
  instrument?: NotePlayer;
}

interface Props {
  children?: React.ReactNode;
}

export const SoundfontContext = ({ children }: Props): JSX.Element => {
  const [instrument, setInstrument] = useState<NotePlayer>(undefined);

  useEffect(() => {
    const setInitialInstrument = async (): Promise<void> => {
      const newInstrument = await getInstrument('acoustic_grand_piano', {
        gain: 10,
        nameToUrl: (name: string) => '/instruments/' + name + '-mp3.js',
      });
      setInstrument(newInstrument);
    };
    setInitialInstrument();
  }, []);

  return <Context.Provider value={{ instrument }}>{children}</Context.Provider>;
};

//Hook
const Context = React.createContext<ProvidedValue>({
  instrument: undefined,
});

export const useInstrumentContext = (): ProvidedValue => React.useContext(Context);
