import React, { useEffect, useState } from 'react';
import { getInstruments, Instrument, InstrumentData, InstrumentName } from 'services/instrumentService';

const defaultInstrument = 'acoustic_grand_piano';

interface ProvidedValue {
  instruments: Instrument[];
  instrument: Instrument;
  selectInstrument: (name: InstrumentName) => void;
}

interface Props {
  children?: React.ReactNode;
}

export const EarfitContext = ({ children }: Props): JSX.Element => {
  const [instruments, setInstruments] = useState<Instrument[]>(InstrumentData);
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

  const contextValues = {
    instruments,
    instrument,
    selectInstrument,
  };

  return <Context.Provider value={contextValues}>{children}</Context.Provider>;
};

const Context = React.createContext<ProvidedValue>({
  instruments: undefined,
  instrument: undefined,
  selectInstrument: () => undefined,
});

export const useInstrumentContext = (): ProvidedValue => React.useContext(Context);
