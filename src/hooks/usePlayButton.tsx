import { useInstrumentContext } from 'context/EarfitContext';
import Selectable from 'utils/Selectable';

type HookReturnType = {
  playNote: (selectable: Selectable) => void;
  playScale: (selectable: Selectable) => void;
  playInterval: (selectable: Selectable) => void;
  label: string;
};

export const usePlayButton = (title: string): HookReturnType => {
  const label = title;
  const { instrument } = useInstrumentContext();

  const play = (selectable: Selectable, time = 0.8, when = 0, duration = 0.7): void => {
    console.log(`Now playing: ${selectable.id} (${selectable.values})`);
    const notesToPlay = selectable.values.map((note, i) => {
      return { note: note, time: i * time, duration: duration };
    });
    instrument?.notePlayer?.schedule(when, notesToPlay);
  };

  function playNote(selectable: Selectable): void {
    play(selectable, 0.3, 0, 2);
  }

  function playScale(selectable: Selectable): void {
    play(selectable, 0.3, 0, 0.5);
  }

  function playInterval(selectable: Selectable): void {
    play(selectable, 0.8, 0, 0.7);
  }
  return { playNote, playScale, playInterval, label };
};

export default usePlayButton;
