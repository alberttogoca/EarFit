import { useEffect, useState } from 'react';
import { calcIntervalToPlay, getIntervals, Interval } from 'services/intervalService';
import { getRandomItem } from 'utils/arrayUtils';
import Selectable from 'utils/Selectable';

export interface SelectableInterval extends Selectable, Interval {}

type HookReturnType = {
  intervals: SelectableInterval[];
  answer: Interval;
  setNewAnswer: () => SelectableInterval;
  updateIsSelectedInterval: (displayName: string, newValue: boolean) => void;
  changeIntervalsDirection: () => void;
  selectAllOptions: (checked: boolean) => void;
};

const useIntervals = (): HookReturnType => {
  const [intervals, setIntervals] = useState<SelectableInterval[]>([]);
  const [answer, setAnswer] = useState<Interval>();
  const [reverse, setReverse] = useState<boolean>(false);

  useEffect(() => {
    const newIntervals = getIntervals().map<SelectableInterval>((interval) => {
      return {
        ...interval,
        isSelected: false,
        displayName: interval.name,
      };
    });

    selectThreeOptions(newIntervals);
    setIntervals(newIntervals);
  }, []);

  useEffect(() => {
    if (!answer || !intervals.find((n) => n.name === answer.name)?.isSelected) {
      setNewAnswer();
    }
  }, [intervals]);

  const selectThreeOptions = (intervals: SelectableInterval[]): void => {
    let item = getRandomItem(intervals);
    for (let i = 0; i < 3; i++) {
      while (item.isSelected === true) {
        item = getRandomItem(intervals);
      }
      item.isSelected = true;
    }
  };

  const selectAllOptions = (checked: boolean): void => {
    const newIntervals = intervals.map<SelectableInterval>((interval) => {
      return {
        ...interval,
        isSelected: !checked,
      };
    });
    if (checked) {
      selectThreeOptions(newIntervals);
    }
    setIntervals(newIntervals);
  };

  const setNewAnswer = (): SelectableInterval => {
    if (intervals.length > 0) {
      const selectedIntervals = intervals.filter((s) => s.isSelected);
      const intervalAnswer = getRandomItem(selectedIntervals);
      const newValue = calcIntervalToPlay(intervalAnswer.name, reverse);
      const newAnswer = { ...intervalAnswer, value: newValue };
      setAnswer(newAnswer);
      return newAnswer;
    }
    return null;
  };

  const updateIsSelectedInterval = (displayName: string, newValue: boolean): void => {
    const hasManySelectedIntervals = intervals.filter((s) => s.isSelected).length > 1;
    if (newValue === true || hasManySelectedIntervals) {
      const newIntervals = intervals.map((interval) => {
        return {
          ...interval,
          isSelected: interval.displayName === displayName ? newValue : interval.isSelected,
        };
      });
      setIntervals(newIntervals);
    }
  };

  const changeIntervalsDirection = (): void => {
    setReverse(!reverse);
    setAnswer({ ...answer, value: answer.value.reverse() });
  };

  return { intervals, answer, setNewAnswer, updateIsSelectedInterval, changeIntervalsDirection, selectAllOptions };
};

export default useIntervals;
