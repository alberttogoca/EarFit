import { useInstrumentContext } from 'context/EarfitContext';
import { useState } from 'react';
import { Answer } from 'utils/Types';

type HookReturnType = {
  playNote: (answer: Answer) => void;
  playScale: (answer: Answer) => void;
  playInterval: (answer: Answer) => void;
  reverse: boolean;
  changeDirection: () => void;
};

export const usePlayButton = (): HookReturnType => {
  const { instrument } = useInstrumentContext();
  const [reverse, setReverse] = useState<boolean>(true);

  function playNote(answer: Answer): void {
    play(answer, 0.3, 0, 2);
  }

  function playScale(answer: Answer): void {
    play(answer, 0.3, 0, 0.5);
  }

  function playInterval(answer: Answer): void {
    play(answer, 0.8, 0, 0.7);
  }

  const play = (answer: Answer, time = 0.8, when = 0, duration = 0.7): void => {
    const valuesCopy = answer.values.slice();
    const values = reverse ? valuesCopy : valuesCopy.reverse();
    const notesToPlay = values.map((note, i) => {
      return { note: note, time: i * time, duration: duration };
    });
    console.log(`Now playing: ${answer.id} (${values})`);
    instrument?.notePlayer?.schedule(when, notesToPlay);
  };

  const changeDirection = (): void => {
    setReverse(!reverse);
  };

  return { playNote, playScale, playInterval, reverse, changeDirection };
};

export default usePlayButton;
