import { useInstrumentContext } from 'context/EarfitContext';
import { Instrument } from 'services/instrumentService';
import Selectable from 'utils/Selectable';

type HookReturnType = {
  playNote: (selectable: Selectable) => void;
  playScale: (selectable: Selectable) => void;
  playInterval: (selectable: Selectable) => void;
  instrument: Instrument;
};

export const PlayButton = (): HookReturnType => {
  const { instrument, play } = useInstrumentContext();

  function playNote(selectable: Selectable): void {
    play(selectable, 0.3, 0, 2);
  }
  function playScale(selectable: Selectable): void {
    play(selectable, 0.3, 0, 0.5);
  }

  function playInterval(selectable: Selectable): void {
    play(selectable, 0.8, 0, 0.7);
  }
  return { playNote, playScale, playInterval, instrument };
};

export default PlayButton;
