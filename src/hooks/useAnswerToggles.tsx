import { useEffect, useState } from 'react';
import { Answer, SelectableAnswer } from 'types';
import { getRandomItem } from 'utils/arrayUtils';

type HookReturnType = {
  answerToggles: SelectableAnswer[];
  updateIsSelected: (selectable: SelectableAnswer) => void;
  selectAllOrThree: () => void;
};

const useAnswerToggles = (answers: Answer[]): HookReturnType => {
  const [answerToggles, setAnswerToggles] = useState<SelectableAnswer[]>([]);

  useEffect(() => {
    if (!answers || answers.length < 1) {
      return;
    }
    const newAnswerToggles = answers.map<SelectableAnswer>((item) => {
      return { ...item, isSelected: false };
    });

    for (let i = 0; i < 3; i++) {
      const item = getRandomItem(newAnswerToggles.filter((x) => !x.isSelected));
      item.isSelected = true;
    }

    setAnswerToggles(newAnswerToggles);
  }, [answers]);

  function selectAllOrThree(): void {
    const allSelected = answerToggles.every((s) => s.isSelected === true);
    if (allSelected) {
      setAnswerToggles((answerToggles) => {
        return getThreeRandomNewAnswersSelected(answerToggles);
      });
    } else {
      setAnswerToggles((answerToggles) => {
        return getAllNewAnswersSelected(answerToggles, true);
      });
    }
  }

  function getThreeRandomNewAnswersSelected(items: SelectableAnswer[]): SelectableAnswer[] {
    const newItems = getAllNewAnswersSelected(items, false);
    for (let i = 0; i < 3; i++) {
      const item = getRandomItem(newItems.filter((x) => !x.isSelected));
      item.isSelected = true;
    }
    return newItems;
  }

  function getAllNewAnswersSelected(items: SelectableAnswer[], newValue: boolean): SelectableAnswer[] {
    return items.map((item) => {
      return {
        ...item,
        isSelected: newValue,
      };
    });
  }

  function updateIsSelected(answerToggleSelected: SelectableAnswer): void {
    const { id } = answerToggleSelected;
    const newValue = !answerToggleSelected.isSelected;
    const hasManySelectedNotes = answerToggles.filter((s) => s.isSelected).length > 1;

    if (newValue === true || hasManySelectedNotes) {
      setAnswerToggles((answerToggles) => {
        return answerToggles.map((answerToggle) => {
          return {
            ...answerToggle,
            isSelected: answerToggle.id === id ? newValue : answerToggle.isSelected,
          };
        });
      });
    }
  }

  return { answerToggles, updateIsSelected, selectAllOrThree };
};

export default useAnswerToggles;
