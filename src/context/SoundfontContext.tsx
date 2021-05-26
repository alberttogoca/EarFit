import { getInstrument, InstrumentName, NotePlayer } from 'context/soundfont-wrapper';
import React, { useEffect, useState } from 'react';

interface ProvidedValue {
  instrument?: NotePlayer;
  setNewInstrument: (name: InstrumentName) => Promise<void>;
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
        nameToUrl: (name: string) => 'instruments/' + name + '-mp3.js',
      });
      setInstrument(newInstrument);
    };
    setInitialInstrument();
  }, []);

  const setNewInstrument = async (name: InstrumentName): Promise<void> => {
    const newInstrument = await getInstrument(name, { gain: 10 });
    setInstrument(newInstrument);
  };

  return <Context.Provider value={{ instrument, setNewInstrument }}>{children}</Context.Provider>;
};

//Hook
const Context = React.createContext<ProvidedValue>({
  instrument: undefined,
  setNewInstrument: () => undefined,
});

export const useInstrumentContext = (): ProvidedValue => React.useContext(Context);
