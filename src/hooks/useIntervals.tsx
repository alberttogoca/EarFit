import { useEffect, useState } from 'react';
import { calcIntervalToPlay, getIntervals } from 'services/intervalService';
import Selectable, {
  getRandomItemThatIsSelected,
  reverseItemValues,
  selectAllOrThreeItems,
  selectThreeRandomItems,
  updateIsSelectedItem,
} from 'utils/Selectable';

type HookReturnType = {
  intervals: Selectable[];
  answer: Selectable;
  setNewAnswer: () => Selectable;
  changeDirection: () => void;
  updateIsSelected: (id: string, newValue: boolean) => void;
  selectAllOrThree: () => void;
};

const useIntervals = (): HookReturnType => {
  const [intervals, setIntervals] = useState<Selectable[]>([]);
  const [answer, setAnswer] = useState<Selectable>();
  const [reverse, setReverse] = useState<boolean>(false);

  useEffect(() => {
    const selectableIntervals = getIntervals();
    const newIntervalsSelection = selectThreeRandomItems(selectableIntervals);
    setIntervals(newIntervalsSelection);
  }, []);

  useEffect(() => {
    if (!answer || !intervals.find((n) => n.id === answer.id)?.isSelected) {
      setNewAnswer();
    }
  }, [intervals]);

  const setNewAnswer = (): Selectable => {
    if (intervals.length > 0) {
      const intervalAnswer = getRandomItemThatIsSelected(intervals);
      const newAnswer = { ...intervalAnswer, values: calcIntervalToPlay(intervalAnswer.id, reverse) };
      setAnswer(newAnswer);
      return newAnswer;
    }
    return null;
  };

  const changeDirection = (): void => {
    setReverse(!reverse);
    setAnswer(reverseItemValues(answer));
  };

  const updateIsSelected = (id: string, newIsSelected: boolean): void => {
    const newIntervals = updateIsSelectedItem(intervals, id, newIsSelected);
    setIntervals(newIntervals);
  };

  const selectAllOrThree = (): void => {
    const newIntervalsSelection = selectAllOrThreeItems(intervals);
    setIntervals(newIntervalsSelection);
  };

  return { intervals, answer, setNewAnswer, changeDirection, updateIsSelected, selectAllOrThree };
};

export default useIntervals;
