import React, { useEffect, useState } from 'react';
import { getInstruments, Instrument, InstrumentName } from 'services/instrumentService';
import { Interval } from 'services/intervalService';
import { Note } from 'services/noteService';
import Selectable from 'utils/Selectable';

const defaultInstrument = 'acoustic_grand_piano';

interface ProvidedValue {
  instruments: Instrument[];
  selectedInstrument: Instrument;
  setNewSelectedInstrument: (name: InstrumentName) => void;
  playNote: (note: Note, when?: number, duration?: number) => void;
  playScale: (scale: Selectable, when?: number, duration?: number) => void;
  playInterval: (interval: Interval, when?: number, duration?: number) => void;
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

  const playNote = (note: Note, when = 0, duration = 2): void => {
    console.log(`Now playing: ${note.value}`);
    selectedInstrument?.notePlayer?.play(note.value, when, { duration });
  };

  const playScale = (scale: Selectable): void => {
    console.log(`Now playing: ${scale.id} : ${scale.values}`);
    const scaleToPlay = scale.values.map((note, i) => {
      return { note: note, time: i * 0.3, duration: 0.5 };
    });
    selectedInstrument?.notePlayer?.schedule(0, scaleToPlay);
  };

  const playInterval = (interval: Interval): void => {
    console.log(`Now playing: ${interval.name} (${interval.value})`);
    const intervalToPlay = interval.value.map((note, i) => {
      return { note: note, time: i * 0.8, duration: 0.7 };
    });
    selectedInstrument?.notePlayer?.schedule(0, intervalToPlay);
  };

  const contextValues = {
    instruments,
    selectedInstrument,
    setNewSelectedInstrument,
    playNote,
    playScale,
    playInterval,
  };

  return <Context.Provider value={contextValues}>{children}</Context.Provider>;
};

const Context = React.createContext<ProvidedValue>({
  instruments: undefined,
  selectedInstrument: undefined,
  setNewSelectedInstrument: () => undefined,
  playNote: () => undefined,
  playScale: () => undefined,
  playInterval: () => undefined,
});

export const useInstrumentContext = (): ProvidedValue => React.useContext(Context);
