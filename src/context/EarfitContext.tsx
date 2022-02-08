import React, { useEffect, useState } from 'react';
import { getInstruments, Instrument, InstrumentName } from 'services/instrumentService';
import Selectable from 'utils/Selectable';

const defaultInstrument = 'acoustic_grand_piano';

interface ProvidedValue {
  instruments: Instrument[];
  instrument: Instrument;
  selectInstrument: (name: InstrumentName) => void;
  play: (selectable: Selectable, time?: number, when?: number, duration?: number) => void;
}

interface Props {
  children?: React.ReactNode;
}

export const EarfitContext = ({ children }: Props): JSX.Element => {
  const [instruments, setInstruments] = useState<Instrument[]>(undefined);
  const [instrument, setInstrument] = useState<Instrument>(undefined);

  useEffect(() => {
    const setInitialInstruments = async (): Promise<void> => {
      const newInstruments = await getInstruments();
      const instrument = newInstruments.find((i) => i.instrumentName === defaultInstrument);
      setInstruments(newInstruments);
      setInstrument(instrument);
    };
    setInitialInstruments();
  }, []);

  const selectInstrument = (name: InstrumentName): void => {
    const instrument = instruments?.find((i) => i.instrumentName === name);
    setInstrument(instrument);
  };

  const play = (selectable: Selectable, time = 0.8, when = 0, duration = 0.7): void => {
    console.log(`Now playing: ${selectable.id} (${selectable.values})`);
    const notesToPlay = selectable.values.map((note, i) => {
      return { note: note, time: i * time, duration: duration };
    });
    instrument?.notePlayer?.schedule(when, notesToPlay);
  };

  const contextValues = {
    instruments,
    instrument,
    selectInstrument,
    play,
  };

  return <Context.Provider value={contextValues}>{children}</Context.Provider>;
};

const Context = React.createContext<ProvidedValue>({
  instruments: undefined,
  instrument: undefined,
  selectInstrument: () => undefined,
  play: () => undefined,
});

export const useInstrumentContext = (): ProvidedValue => React.useContext(Context);
