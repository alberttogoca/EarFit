import { useInstrumentContext } from 'context/EarfitContext';
import { Answer } from 'utils/Selectable';

type HookReturnType = {
  playNote: (selectable: Answer) => void;
  playScale: (selectable: Answer) => void;
  playInterval: (selectable: Answer) => void;
};

export const usePlayButton = (): HookReturnType => {
  const { instrument } = useInstrumentContext();

  const play = (selectable: Answer, time = 0.8, when = 0, duration = 0.7): void => {
    console.log(`Now playing: ${selectable.id} (${selectable.values})`);
    const notesToPlay = selectable.values.map((note, i) => {
      return { note: note, time: i * time, duration: duration };
    });
    instrument?.notePlayer?.schedule(when, notesToPlay);
  };

  function playNote(selectable: Answer): void {
    play(selectable, 0.3, 0, 2);
  }

  function playScale(selectable: Answer): void {
    play(selectable, 0.3, 0, 0.5);
  }

  function playInterval(selectable: Answer): void {
    play(selectable, 0.8, 0, 0.7);
  }
  return { playNote, playScale, playInterval };
};

export default usePlayButton;
