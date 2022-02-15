import { useEffect, useState } from 'react';
import Selectable, { selectAllOrThreeItems, selectThreeRandomItems, updateIsSelectedItem } from 'utils/Selectable';

type HookReturnType = {
  answerToggles: Selectable[];
  updateIsSelected: (id: string, newIsSelected: boolean) => void;
  selectAllOrThree: () => void;
};

export function useAnswerToggles(selectables: Selectable[]): HookReturnType {
  const [answerToggles, setAnswerToggles] = useState<Selectable[]>([]);

  useEffect(() => {
    if (selectables.length < 1) {
      return;
    }
    const newAnswerToggles = selectThreeRandomItems(selectables);
    setAnswerToggles(newAnswerToggles);
  }, [selectables]);

  const updateIsSelected = (id: string, newIsSelected: boolean): void => {
    const newAnswerToggles = updateIsSelectedItem(answerToggles, id, newIsSelected);
    setAnswerToggles(newAnswerToggles);
  };

  const selectAllOrThree = (): void => {
    const newAnswerToggles = selectAllOrThreeItems(answerToggles);
    setAnswerToggles(newAnswerToggles);
  };

  return { answerToggles, updateIsSelected, selectAllOrThree };
}

export default useAnswerToggles;
