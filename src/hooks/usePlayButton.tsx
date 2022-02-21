import { useInstrumentContext } from 'context/EarfitContext';
import { Answer, VariantExercise } from 'utils/Types';

type HookReturnType = {
  playAnswer: () => void;
};

export const usePlayButton = (variant: VariantExercise, answer: Answer, direction?: boolean): HookReturnType => {
  const { instrument } = useInstrumentContext();

  function playAnswer(): void {
    switch (variant) {
      case 'notes':
        play(answer, 0.3, 0, 2, direction);
        break;
      case 'intervals':
        play(answer, 0.8, 0, 0.7, direction);
        break;
      case 'scales':
        play(answer, 0.3, 0, 0.5, direction);
        break;
    }
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

  return { playAnswer };
};

export default usePlayButton;
