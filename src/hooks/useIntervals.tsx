import { useEffect, useState } from 'react';
import { getIntervals, Interval } from 'services/intervalService';
import { getRandomItem } from 'utils/arrayUtils';
import Selectable from 'utils/Selectable';

export interface SelectableInterval extends Selectable, Interval {}

type HookReturnType = {
  intervals: SelectableInterval[];
  answer: Interval;
  setNewAnswer: () => SelectableInterval;
  updateIsSelectedInterval: (displayName: string, newValue: boolean) => void;
  changeIntervalsDirection: () => void;
};

const useIntervals = (): HookReturnType => {
  const [intervals, setIntervals] = useState<SelectableInterval[]>([]);
  const [answer, setAnswer] = useState<Interval>();

  useEffect(() => {
    const newIntervals = getIntervals().map<SelectableInterval>((interval) => {
      return {
        ...interval,
        isSelected: true,
        displayName: interval.name,
      };
    });

    setIntervals(newIntervals);
  }, []);

  useEffect(() => {
    if (!answer || !intervals.find((n) => n.name === answer.name)?.isSelected) {
      setNewAnswer();
    }
  }, [intervals]);

  const setNewAnswer = (): SelectableInterval => {
    const selectedIntervals = intervals.filter((s) => s.isSelected);
    const intervalAnswer = getRandomItem(selectedIntervals);
    setAnswer(intervalAnswer);
    return intervalAnswer;
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
    const newIntervals = intervals.map((interval) => {
      return {
        ...interval,
        value: interval.value.reverse(),
      };
    });
    setIntervals(newIntervals);
  };

  return { intervals, answer, setNewAnswer, updateIsSelectedInterval, changeIntervalsDirection };
};

export default useIntervals;
