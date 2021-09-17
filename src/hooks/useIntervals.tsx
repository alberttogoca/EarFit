import { Scale as TonalScale } from '@tonaljs/tonal';
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
};

const useIntervals = (): HookReturnType => {
  const [intervals, setIntervals] = useState<SelectableInterval[]>([]);
  const [answer, setAnswer] = useState<Interval>();
  const octaves = [1, 2, 3, 4, 5, 6, 7, 8];
  const notes = octaves.flatMap((octave) => {
    return TonalScale.get('C' + octave + ' major').notes;
  });

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
    if (intervals.length > 0) {
      const root = getRandomItem(notes);
      const selectedIntervals = intervals.filter((s) => s.isSelected);
      const intervalAnswer = getRandomItem(selectedIntervals);
      const newValue = calcIntervalToPlay(root, intervalAnswer.name);
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
