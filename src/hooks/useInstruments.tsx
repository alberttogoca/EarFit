import { InstrumentName } from 'context/soundfont-wrapper';
import { useInstrumentContext } from 'context/SoundfontContext';
import { useEffect, useState } from 'react';
import Selectable from 'utils/Selectable';

interface SelectableInstrument extends Selectable {
  emoji: string;
  instrumentName: InstrumentName;
}

const defaultInstruments: SelectableInstrument[] = [
  { displayName: 'Grand Piano', emoji: '🎹', instrumentName: 'acoustic_grand_piano', isSelected: false },
  { displayName: 'Guitar', emoji: '🎸', instrumentName: 'acoustic_guitar_nylon', isSelected: false },
  { displayName: 'Trumpet', emoji: '🎺', instrumentName: 'trumpet', isSelected: false },
];

type HookReturnType = {
  instruments: SelectableInstrument[];
  setNewInstrument: (name: InstrumentName) => Promise<void>;
};

const useInstruments = (): HookReturnType => {
  const { instrument, setNewInstrument } = useInstrumentContext();
  const [instruments, setInstruments] = useState<SelectableInstrument[]>(defaultInstruments);

  useEffect(() => {
    setInstruments((oldInstruments) => {
      return oldInstruments.map((ins) => {
        return {
          ...ins,
          isSelected: ins.instrumentName === instrument?.instrumentName,
        };
      });
    });
  }, [instrument]);

  return { instruments, setNewInstrument };
};

export default useInstruments;
