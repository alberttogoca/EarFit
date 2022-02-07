import React, { useEffect, useState } from 'react';
import { getInstruments, Instrument, InstrumentName } from 'services/instrumentService';
import Selectable from 'utils/Selectable';

const defaultInstrument = 'acoustic_grand_piano';

interface ProvidedValue {
  instruments: Instrument[];
  selectedInstrument: Instrument;
  setNewSelectedInstrument: (name: InstrumentName) => void;
  play: (interval: Selectable, time?: number, when?: number, duration?: number) => void;
}

interface Props {
  children?: React.ReactNode;
}

export const EarfitContext = ({ children }: Props): JSX.Element => {
  const [instruments, setInstruments] = useState<Instrument[]>(undefined);
  const [selectedInstrument, setSelectedInstrument] = useState<Instrument>(undefined);

  useEffect(() => {
    const setInitialInstruments = async (): Promise<void> => {
      const newInstruments = await getInstruments();
      const instrument = newInstruments.find((i) => i.instrumentName === defaultInstrument);
      setInstruments(newInstruments);
      setSelectedInstrument(instrument);
    };
    setInitialInstruments();
  }, []);

  const setNewSelectedInstrument = (name: InstrumentName): void => {
    const instrument = instruments.find((i) => i.instrumentName === name);
    setSelectedInstrument(instrument);
  };

  const play = (selectable: Selectable, time = 0.8, when = 0, duration = 0.7): void => {
    console.log(`Now playing: ${selectable.id} (${selectable.values})`);
    const notesToPlay = selectable.values.map((note, i) => {
      return { note: note, time: i * time, duration: duration };
    });
    selectedInstrument?.notePlayer?.schedule(when, notesToPlay);
  };

  const contextValues = {
    instruments,
    selectedInstrument,
    setNewSelectedInstrument,
    play,
  };

  return <Context.Provider value={contextValues}>{children}</Context.Provider>;
};

const Context = React.createContext<ProvidedValue>({
  instruments: undefined,
  selectedInstrument: undefined,
  setNewSelectedInstrument: () => undefined,
  play: () => undefined,
});

export const useInstrumentContext = (): ProvidedValue => React.useContext(Context);
