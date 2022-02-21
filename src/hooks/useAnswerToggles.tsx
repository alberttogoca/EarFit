import { useEffect, useState } from 'react';
import { Answer, getItemsWithThreeSelected, SelectableAnswer, selectThreeRandomItems } from 'utils/Types';

type HookReturnType = {
  answerToggles: SelectableAnswer[];
  updateIsSelected: (selectable: SelectableAnswer) => void;
  selectAllOrThree: () => void;
};

export function useAnswerToggles(answers: Answer[]): HookReturnType {
  const [answerToggles, setAnswerToggles] = useState<SelectableAnswer[]>([]);

  useEffect(() => {
    if (!answers || answers.length === 0) {
      return;
    }
    const answersWithSelected = answers.map<SelectableAnswer>((s) => {
      return { ...s, isSelected: false };
    });

    const newAnswerToggles = getItemsWithThreeSelected(answersWithSelected);
    setAnswerToggles(newAnswerToggles);
  }, [answers]);

  const selectAllOrThree = (): void => {
    const allSelected = answerToggles.every((s) => s.isSelected === true);
    if (allSelected) {
      selectThreeItems();
    } else {
      selectAllItems();
    }
  };

  const selectAllItems = (): void => {
    setAnswerToggles((answerToggles) => {
      return answerToggles.map<SelectableAnswer>((answerToggle) => {
        return {
          ...answerToggle,
          isSelected: true,
        };
      });
    });
  };

  const selectThreeItems = (): void => {
    const ids = selectThreeRandomItems(answerToggles).map((s) => s.id);
    setAnswerToggles((answerToggles) => {
      return answerToggles.map<SelectableAnswer>((answerToggle) => {
        return {
          ...answerToggle,
          isSelected: ids.some((id) => id == answerToggle.id),
        };
      });
    });
  };

  const updateIsSelected = (answerToggleSelected: SelectableAnswer): void => {
    const { id } = answerToggleSelected;
    const newValue = !answerToggleSelected.isSelected;
    const hasManySelectedNotes = answerToggles.filter((s) => s.isSelected).length > 1;

    if (newValue === true || hasManySelectedNotes) {
      setAnswerToggles((answerToggles) => {
        return answerToggles.map<SelectableAnswer>((answerToggle) => {
          return {
            ...answerToggle,
            isSelected: answerToggle.id === id ? newValue : answerToggle.isSelected,
          };
        });
      });
    }
  };

  return { answerToggles, updateIsSelected, selectAllOrThree };
}

export default useAnswerToggles;
