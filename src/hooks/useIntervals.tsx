import { useEffect, useState } from 'react';
import { calcIntervalToPlay, getIntervals } from 'services/intervalService';
import Selectable, {
  getRandomItemThatIsSelected,
  reverseItemValues,
  selectThreeOptions,
  toggleAllOptions,
  updateIsSelected,
} from 'utils/Selectable';

type HookReturnType = {
  intervals: Selectable[];
  answer: Selectable;
  setNewAnswer: () => Selectable;
  updateIsSelectedInterval: (id: string, newValue: boolean) => void;
  changeIntervalsDirection: () => void;
  toggleAllIntervals: () => void;
};

const useIntervals = (): HookReturnType => {
  const [intervals, setIntervals] = useState<Selectable[]>([]);
  const [answer, setAnswer] = useState<Selectable>();
  const [reverse, setReverse] = useState<boolean>(false);

  useEffect(() => {
    const selectableIntervals = getIntervals();
    const newIntervalsSelection = selectThreeOptions(selectableIntervals);
    setIntervals(newIntervalsSelection);
  }, []);

  useEffect(() => {
    if (!answer || !intervals.find((n) => n.id === answer.id)?.isSelected) {
      setNewAnswer();
    }
  }, [intervals]);

  const toggleAllIntervals = (): void => {
    const newIntervalsSelection = toggleAllOptions(intervals);
    setIntervals(newIntervalsSelection);
  };

  const setNewAnswer = (): Selectable => {
    if (intervals.length > 0) {
      const intervalAnswer = getRandomItemThatIsSelected(intervals);
      const newAnswer = { ...intervalAnswer, values: calcIntervalToPlay(intervalAnswer.id, reverse) };
      setAnswer(newAnswer);
      return newAnswer;
    }
    return null;
  };

  const updateIsSelectedInterval = (id: string, newIsSelected: boolean): void => {
    const newIntervals = updateIsSelected(intervals, id, newIsSelected);
    setIntervals(newIntervals);
  };

  const changeIntervalsDirection = (): void => {
    setReverse(!reverse);
    setAnswer(reverseItemValues(answer));
  };

  return { intervals, answer, setNewAnswer, updateIsSelectedInterval, changeIntervalsDirection, toggleAllIntervals };
};

export default useIntervals;
