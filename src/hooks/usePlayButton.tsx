import { useInstrumentContext } from 'context/EarfitContext';
import { Answer } from 'utils/Types';

type HookReturnType = {
  playNote: (answer: Answer, direction?: boolean) => void;
  playScale: (answer: Answer, direction?: boolean) => void;
  playInterval: (answer: Answer, direction?: boolean) => void;
};

export const usePlayButton = (): HookReturnType => {
  const { instrument } = useInstrumentContext();

  function playNote(answer: Answer, direction?: boolean): void {
    play(answer, 0.3, 0, 2, direction);
  }

  function playScale(answer: Answer, direction?: boolean): void {
    play(answer, 0.3, 0, 0.5, direction);
  }

  function playInterval(answer: Answer, direction?: boolean): void {
    play(answer, 0.8, 0, 0.7, direction);
  }

  const play = (answer: Answer, time = 0.8, when = 0, duration = 0.7, direction = true): void => {
    const valuesCopy = answer.values.slice();
    const values = direction ? valuesCopy : valuesCopy.reverse();
    const notesToPlay = values.map((note, i) => {
      return { note: note, time: i * time, duration: duration };
    });
    console.log(`Now playing: ${answer.id} (${values})`);
    instrument?.notePlayer?.schedule(when, notesToPlay);
  };

  return { playNote, playScale, playInterval };
};

export default usePlayButton;
