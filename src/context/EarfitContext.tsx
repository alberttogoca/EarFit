import { InstrumentName } from 'context/soundfont-wrapper';
import React, { useEffect, useState } from 'react';
import { getInstrument, getInstruments, Instrument } from 'services/instrumentService';
import { Note } from 'services/noteService';
import { Scale } from 'services/scaleService';

interface ProvidedValue {
  instruments: Instrument[];
  selectedInstrument: Instrument;
  setNewSelectedInstrument: (name: InstrumentName) => Promise<void>;
  playNote: (note: Note, when?: number, duration?: number) => void;
  playScale: (scale: Scale, when?: number, duration?: number) => void;
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

  const playNote = (note: Note, when = 0, duration = 2): void => {
    console.log(`Now playing: ${note.value}`);
    selectedInstrument?.notePlayer?.play(note.value, when, { duration });
  };

  const playScale = (scale: Scale): void => {
    console.log(`Now playing: ${scale.name} : ${scale.value}`);
    const scaleToPlay = scale.value.map((note, i) => {
      return { note: note, time: i * 0.3, duration: 0.5 };
    });
    selectedInstrument?.notePlayer?.schedule(0, scaleToPlay);
  };
  const contextValues = { instruments, selectedInstrument, setNewSelectedInstrument, playNote, playScale };

  return <Context.Provider value={contextValues}>{children}</Context.Provider>;
};

const Context = React.createContext<ProvidedValue>({
  instruments: undefined,
  selectedInstrument: undefined,
  setNewSelectedInstrument: () => undefined,
  playNote: () => undefined,
  playScale: () => undefined,
});

export const useInstrumentContext = (): ProvidedValue => React.useContext(Context);
