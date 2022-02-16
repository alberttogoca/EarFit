import { useEffect, useState } from 'react';
import { calcIntervalToPlay, getIntervals } from 'services/intervalService';
import Selectable, { getRandomItemThatIsSelected, reverseItemValues } from 'utils/Selectable';

type HookReturnType = {
  intervals: Selectable[];
  setNewIntervals: (selectable: Selectable[]) => void;
  answer: Selectable;
  setNewAnswer: () => void;
  changeDirection: () => void;
};

const useIntervals = (): HookReturnType => {
  const [intervals, setIntervals] = useState<Selectable[]>([]);
  const [answer, setAnswer] = useState<Selectable>();
  const [reverse, setReverse] = useState<boolean>(false);

  useEffect(() => {
    const newIntervals = getIntervals();
    setIntervals(newIntervals);
  }, []);

  useEffect(() => {
    if (!answer || !intervals.find((n) => n.id === answer.id)?.isSelected) {
      const intervalAnswer = getRandomItemThatIsSelected(intervals);
      const newAnswer = { ...intervalAnswer, values: calcIntervalToPlay(intervalAnswer.id, reverse) };
      setAnswer(newAnswer);
    }
  }, [answer, intervals, reverse]);

  function setNewIntervals(newIntervals: Selectable[]): void {
    setIntervals(newIntervals);
  }

  const setNewAnswer = (): void => {
    if (intervals.length > 0) {
      const intervalAnswer = getRandomItemThatIsSelected(intervals);
      const newAnswer = { ...intervalAnswer, values: calcIntervalToPlay(intervalAnswer.id, reverse) };
      setAnswer(newAnswer);
    }
  };

  const changeDirection = (): void => {
    setReverse(!reverse);
    setAnswer(reverseItemValues(answer));
  };

  return { intervals, answer, setNewAnswer, changeDirection, setNewIntervals };
};

export default useIntervals;
