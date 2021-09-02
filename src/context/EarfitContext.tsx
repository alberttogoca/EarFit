import { InstrumentName } from 'context/soundfont-wrapper';
import React, { useEffect, useState } from 'react';
import { Instrument, getInstrument, getInstruments } from 'services/instrumentService';

interface ProvidedValue {
  instruments: Instrument[];
  selectedInstrument: Instrument;
  setNewSelectedInstrument: (name: InstrumentName) => Promise<void>;
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
      const instrument = await getInstrument('acoustic_grand_piano');
      setInstruments(newInstruments);
      setSelectedInstrument(instrument);
    };
    setInitialInstruments();
  }, []);

  const setNewSelectedInstrument = async (name: InstrumentName): Promise<void> => {
    const instrument = await getInstrument(name);
    setSelectedInstrument(instrument);
  };

  const contextValues = { instruments, selectedInstrument, setNewSelectedInstrument };

  return <Context.Provider value={contextValues}>{children}</Context.Provider>;
};

const Context = React.createContext<ProvidedValue>({
  instruments: undefined,
  selectedInstrument: undefined,
  setNewSelectedInstrument: () => undefined,
});

export const useInstrumentContext = (): ProvidedValue => React.useContext(Context);